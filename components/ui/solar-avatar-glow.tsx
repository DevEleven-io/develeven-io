"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface SolarAvatarGlowProps {
  initial: string;
  avatarUrl?: string | null;
  className?: string;
  size?: number; // default is 36
}

export function SolarAvatarGlow({
  initial,
  avatarUrl,
  className,
  size = 36,
}: SolarAvatarGlowProps) {
  const [imgError, setImgError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const pad = 22;
    const width = size + pad * 2;
    const height = size + pad * 2;

    canvas.width = width;
    canvas.height = height;

    interface Particle {
      angle: number;
      orbitRadius: number;
      orbitSpeed: number;
      radialSpeed: number;
      size: number;
      maxLife: number;
      life: number;
      color: string;
    }

    let particles: Particle[] = [];

    const solarColors = [
      "rgba(255, 255, 255, 0.98)", // Core diamond white
      "rgba(254, 240, 138, 0.9)",  // Yellow-200
      "rgba(251, 191, 36, 0.85)",  // Amber-400
      "rgba(245, 158, 11, 0.8)",   // Amber-500
      "rgba(234, 88, 12, 0.75)",   // Orange-600
    ];

    const spawnParticle = (): Particle => {
      const radius = size / 2;
      const angle = Math.random() * Math.PI * 2;
      const startRadius = radius * (0.95 + Math.random() * 0.1);

      const pSize = 1.2 + Math.random() * 2.6;
      const maxLife = 26 + Math.random() * 24;

      const roll = Math.random();
      let color = solarColors[2];
      if (roll > 0.82) color = solarColors[0];
      else if (roll > 0.6) color = solarColors[1];
      else if (roll > 0.3) color = solarColors[2];
      else if (roll > 0.1) color = solarColors[3];
      else color = solarColors[4];

      return {
        angle,
        orbitRadius: startRadius,
        orbitSpeed: (0.015 + Math.random() * 0.025) * (Math.random() > 0.5 ? 1 : -1),
        radialSpeed: 0.18 + Math.random() * 0.35,
        size: pSize,
        maxLife,
        life: maxLife,
        color,
      };
    };

    const drawLoop = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < 2; i++) {
        particles.push(spawnParticle());
      }

      ctx.globalCompositeOperation = "lighter";

      particles = particles.filter((p) => {
        p.life--;

        // Orbital rotation + slow expansion outward (solar flares drifting)
        p.angle += p.orbitSpeed;
        p.orbitRadius += p.radialSpeed;

        const x = cx + Math.cos(p.angle) * p.orbitRadius;
        const y = cy + Math.sin(p.angle) * p.orbitRadius;

        const lifeRatio = p.life / p.maxLife;
        const currentSize = p.size * lifeRatio;

        if (p.life <= 0 || currentSize <= 0) return false;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          currentSize * 1.6
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(
          0.35,
          p.color.replace(/[\d.]+\)$/, `${lifeRatio * 0.65})`)
        );
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.arc(x, y, currentSize * 2, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      animationFrameId = requestAnimationFrame(drawLoop);
    };

    drawLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center shrink-0 select-none",
        className
      )}
      style={{ width: size, height: size }}
    >
      {/* 1. Solar Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute pointer-events-none filter blur-[0.4px]"
        style={{
          width: size + 44,
          height: size + 44,
          top: -22,
          left: -22,
          zIndex: 30,
        }}
      />

      {/* 2. Golden Solar Glow Aura */}
      <div
        className="absolute rounded-full bg-[conic-gradient(from_0deg,#f59e0b,#f97316,#eab308,#f59e0b)] animate-[spin_4s_linear_infinite] filter blur-sm opacity-80"
        style={{
          width: size + 4,
          height: size + 4,
          zIndex: 0,
        }}
      />

      {/* 3. Metallic Gold Conic Border Ring */}
      <div
        className="absolute rounded-full bg-[conic-gradient(from_0deg,#fef08a,#fbbf24,#f59e0b,#d97706,#fef08a)] animate-[spin_3.5s_linear_infinite] p-[1.5px]"
        style={{
          width: size,
          height: size,
          zIndex: 10,
        }}
      >
        {/* 4. Avatar Body */}
        <div
          className="w-full h-full rounded-full bg-background flex items-center justify-center text-foreground font-extrabold shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] relative overflow-hidden"
          style={{
            fontSize: `${size * 0.38}px`,
          }}
        >
          {avatarUrl && !imgError ? (
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-full h-full rounded-full object-cover relative z-10"
              onError={() => setImgError(true)}
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.25),transparent_70%)] pointer-events-none" />
              <span className="relative z-10 text-white tracking-wide">
                {initial}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
