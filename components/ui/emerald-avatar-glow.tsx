"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface EmeraldAvatarGlowProps {
  initial: string;
  avatarUrl?: string | null;
  className?: string;
  size?: number; // default is 36
}

export function EmeraldAvatarGlow({
  initial,
  avatarUrl,
  className,
  size = 36,
}: EmeraldAvatarGlowProps) {
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

    interface MatrixBit {
      x: number;
      y: number;
      vy: number;
      size: number;
      maxLife: number;
      life: number;
      color: string;
      char?: string;
    }

    let particles: MatrixBit[] = [];

    const matrixColors = [
      "rgba(255, 255, 255, 0.98)", // Pure core
      "rgba(110, 231, 183, 0.9)",  // Emerald-300
      "rgba(52, 211, 153, 0.85)",  // Emerald-400
      "rgba(16, 185, 129, 0.8)",   // Emerald-500
      "rgba(5, 150, 105, 0.75)",   // Emerald-600
    ];

    const chars = ["0", "1", "◇", "⚡", "+", "▫"];

    const spawnParticle = (): MatrixBit => {
      const cx = width / 2;
      const cy = height / 2;
      const radius = size / 2;

      // Ring emission angle
      const angle = Math.random() * Math.PI * 2;
      const startRadius = radius * (0.9 + Math.random() * 0.15);

      const x = cx + Math.cos(angle) * startRadius;
      const y = cy + Math.sin(angle) * startRadius;

      // Vertical matrix drift upward
      const vy = -0.8 - Math.random() * 1.4;
      const pSize = 1.0 + Math.random() * 2.2;
      const maxLife = 20 + Math.random() * 20;

      const roll = Math.random();
      let color = matrixColors[3];
      if (roll > 0.85) color = matrixColors[0];
      else if (roll > 0.6) color = matrixColors[1];
      else if (roll > 0.3) color = matrixColors[2];
      else color = matrixColors[3];

      const char = Math.random() > 0.6 ? chars[Math.floor(Math.random() * chars.length)] : undefined;

      return {
        x,
        y,
        vy,
        size: pSize,
        maxLife,
        life: maxLife,
        color,
        char,
      };
    };

    const drawLoop = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < 2; i++) {
        particles.push(spawnParticle());
      }

      ctx.globalCompositeOperation = "lighter";

      particles = particles.filter((p) => {
        p.life--;
        p.y += p.vy;

        const lifeRatio = p.life / p.maxLife;
        const currentSize = p.size * lifeRatio;

        if (p.life <= 0 || currentSize <= 0) return false;

        if (p.char) {
          ctx.font = `${Math.max(8, Math.floor(currentSize * 4))}px monospace`;
          ctx.fillStyle = p.color;
          ctx.fillText(p.char, p.x, p.y);
        } else {
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            currentSize * 1.6
          );
          gradient.addColorStop(0, p.color);
          gradient.addColorStop(
            0.4,
            p.color.replace(/[\d.]+\)$/, `${lifeRatio * 0.6})`)
          );
          gradient.addColorStop(1, "rgba(0,0,0,0)");

          ctx.fillStyle = gradient;
          ctx.arc(p.x, p.y, currentSize * 1.8, 0, Math.PI * 2);
          ctx.fill();
        }

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
      {/* 1. Emerald Matrix Canvas */}
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

      {/* 2. Emerald Mint Glow Aura */}
      <div
        className="absolute rounded-full bg-[conic-gradient(from_0deg,#10b981,#14b8a6,#06b6d4,#10b981)] animate-[spin_4s_linear_infinite] filter blur-sm opacity-80"
        style={{
          width: size + 4,
          height: size + 4,
          zIndex: 0,
        }}
      />

      {/* 3. Cyber Neon Mint Conic Border Ring */}
      <div
        className="absolute rounded-full bg-[conic-gradient(from_0deg,#6ee7b7,#34d399,#10b981,#059669,#6ee7b7)] animate-[spin_3s_linear_infinite] p-[1.5px]"
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),transparent_70%)] pointer-events-none" />
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
