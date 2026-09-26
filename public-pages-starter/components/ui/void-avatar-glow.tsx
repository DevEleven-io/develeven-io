"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface VoidAvatarGlowProps {
  initial: string;
  avatarUrl?: string | null;
  className?: string;
  size?: number; // default is 36
}

export function VoidAvatarGlow({
  initial,
  avatarUrl,
  className,
  size = 36,
}: VoidAvatarGlowProps) {
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

    interface PlasmaParticle {
      angle: number;
      dist: number;
      vAngle: number;
      vDist: number;
      size: number;
      maxLife: number;
      life: number;
      color: string;
    }

    let particles: PlasmaParticle[] = [];

    const plasmaColors = [
      "rgba(255, 255, 255, 0.98)", // Hot white core
      "rgba(251, 113, 133, 0.9)",  // Rose-400
      "rgba(244, 63, 94, 0.85)",   // Rose-500
      "rgba(225, 29, 72, 0.8)",    // Rose-600
      "rgba(157, 23, 77, 0.75)",   // Pink-800 / Crimson
    ];

    const spawnParticle = (): PlasmaParticle => {
      const radius = size / 2;
      const angle = Math.random() * Math.PI * 2;
      const startDist = radius * (0.9 + Math.random() * 0.15);

      const pSize = 1.2 + Math.random() * 2.8;
      const maxLife = 22 + Math.random() * 22;

      const roll = Math.random();
      let color = plasmaColors[3];
      if (roll > 0.82) color = plasmaColors[0];
      else if (roll > 0.6) color = plasmaColors[1];
      else if (roll > 0.3) color = plasmaColors[2];
      else if (roll > 0.1) color = plasmaColors[3];
      else color = plasmaColors[4];

      return {
        angle,
        dist: startDist,
        vAngle: 0.04 + Math.random() * 0.04, // Vortex spiral angular velocity
        vDist: 0.2 + Math.random() * 0.4,    // Outward radial expand
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
        p.angle += p.vAngle;
        p.dist += p.vDist;

        const x = cx + Math.cos(p.angle) * p.dist;
        const y = cy + Math.sin(p.angle) * p.dist;

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
      {/* 1. Void Plasma Canvas */}
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

      {/* 2. Void Crimson Glow Aura */}
      <div
        className="absolute rounded-full bg-[conic-gradient(from_0deg,#e11d48,#7c3aed,#9333ea,#e11d48)] animate-[spin_4s_linear_infinite] filter blur-sm opacity-80"
        style={{
          width: size + 4,
          height: size + 4,
          zIndex: 0,
        }}
      />

      {/* 3. Deep Crimson Void Conic Border Ring */}
      <div
        className="absolute rounded-full bg-[conic-gradient(from_0deg,#fb7185,#e11d48,#9f1239,#fb7185)] animate-[spin_3s_linear_infinite] p-[1.5px]"
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.25),transparent_70%)] pointer-events-none" />
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
