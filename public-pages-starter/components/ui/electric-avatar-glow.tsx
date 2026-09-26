"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ElectricAvatarGlowProps {
  initial: string;
  avatarUrl?: string | null;
  className?: string;
  size?: number; // default is 36
}

export function ElectricAvatarGlow({
  initial,
  avatarUrl,
  className,
  size = 36,
}: ElectricAvatarGlowProps) {
  const [imgError, setImgError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const pad = 20;
    const width = size + pad * 2;
    const height = size + pad * 2;

    canvas.width = width;
    canvas.height = height;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      maxLife: number;
      life: number;
      color: string;
      angle: number;
      speed: number;
    }

    let particles: Particle[] = [];

    const sparkColors = [
      "rgba(255, 255, 255, 0.98)", // Pure electric core
      "rgba(103, 232, 249, 0.9)",  // Cyan-300
      "rgba(6, 182, 212, 0.8)",    // Cyan-500
      "rgba(59, 130, 246, 0.75)",   // Blue-500
      "rgba(129, 140, 248, 0.7)",   // Indigo-400
    ];

    const spawnParticle = (): Particle => {
      const avatarCenterX = width / 2;
      const avatarCenterY = height / 2;
      const radius = size / 2;

      // Radial emission around full circumference
      const angle = Math.random() * Math.PI * 2;
      const startRadius = radius * (0.92 + Math.random() * 0.12);

      const x = avatarCenterX + Math.cos(angle) * startRadius;
      const y = avatarCenterY + Math.sin(angle) * startRadius;

      // Electric spark movement: fast radial outward velocity with high jitter
      const speed = 0.8 + Math.random() * 1.6;
      const vx = Math.cos(angle) * speed + (Math.random() - 0.5) * 0.8;
      const vy = Math.sin(angle) * speed + (Math.random() - 0.5) * 0.8;

      const pSize = 1.0 + Math.random() * 2.2;
      const maxLife = 14 + Math.random() * 16;

      const roll = Math.random();
      let color = sparkColors[2];
      if (roll > 0.8) color = sparkColors[0];
      else if (roll > 0.55) color = sparkColors[1];
      else if (roll > 0.3) color = sparkColors[2];
      else color = sparkColors[3];

      return {
        x,
        y,
        vx,
        vy,
        size: pSize,
        maxLife,
        life: maxLife,
        color,
        angle,
        speed,
      };
    };

    let frameCount = 0;

    const drawLoop = () => {
      ctx.clearRect(0, 0, width, height);
      frameCount++;

      // Spawn electric sparks
      for (let i = 0; i < 2; i++) {
        particles.push(spawnParticle());
      }

      ctx.globalCompositeOperation = "lighter";

      // Draw crackling electrical lightning arcs across border every few frames
      if (frameCount % 4 === 0) {
        const cx = width / 2;
        const cy = height / 2;
        const r = size / 2 + 1;
        const a1 = Math.random() * Math.PI * 2;
        const a2 = a1 + (0.3 + Math.random() * 0.6) * (Math.random() > 0.5 ? 1 : -1);

        const x1 = cx + Math.cos(a1) * r;
        const y1 = cy + Math.sin(a1) * r;
        const x2 = cx + Math.cos(a2) * r;
        const y2 = cy + Math.sin(a2) * r;

        // Jagged midpoint arc
        const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * 6;
        const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * 6;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(midX, midY);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = Math.random() > 0.5 ? "rgba(255, 255, 255, 0.9)" : "rgba(6, 182, 212, 0.85)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      particles = particles.filter((p) => {
        p.life--;

        // Fast electric decay with micro jitter
        p.x += p.vx + (Math.random() - 0.5) * 0.6;
        p.y += p.vy + (Math.random() - 0.5) * 0.6;

        const lifeRatio = p.life / p.maxLife;
        const currentSize = p.size * lifeRatio;

        if (p.life <= 0 || currentSize <= 0) return false;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          currentSize * 1.5
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(
          0.4,
          p.color.replace(/[\d.]+\)$/, `${lifeRatio * 0.7})`)
        );
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, currentSize * 1.8, 0, Math.PI * 2);
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
      {/* 1. Electric Lightning Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute pointer-events-none filter blur-[0.3px]"
        style={{
          width: size + 40,
          height: size + 40,
          top: -20,
          left: -20,
          zIndex: 30,
        }}
      />

      {/* 2. Electric Cyan Glow Aura */}
      <div
        className="absolute rounded-full bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#6366f1,#06b6d4)] animate-[spin_3s_linear_infinite] filter blur-sm opacity-80"
        style={{
          width: size + 4,
          height: size + 4,
          zIndex: 0,
        }}
      />

      {/* 3. Fast-Spinning Neon Cyan Border Ring */}
      <div
        className="absolute rounded-full bg-[conic-gradient(from_0deg,#67e8f9,#06b6d4,#3b82f6,#67e8f9)] animate-[spin_2.5s_linear_infinite] p-[1.5px]"
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.25),transparent_70%)] pointer-events-none" />
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
