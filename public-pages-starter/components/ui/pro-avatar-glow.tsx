"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ProAvatarGlowProps {
  initial: string;
  avatarUrl?: string | null;
  className?: string;
  size?: number; // default is 36 (equivalent to h-9 w-9)
}

export function ProAvatarGlow({
  initial,
  avatarUrl,
  className,
  size = 36,
}: ProAvatarGlowProps) {
  const [imgError, setImgError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Dimensions: padded to let flames rise and drift
    const padX = 14;
    const padTop = 26;
    const padBottom = 8;
    const width = size + padX * 2;
    const height = size + padTop + padBottom;

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
      flickerSpeed: number;
    }

    let particles: Particle[] = [];

    // Premium blue fire palette (white core, sky blue, cyan, vivid blue, deep navy)
    const fireColors = [
      "rgba(255, 255, 255, 0.95)", // 0: White hot core
      "rgba(56, 189, 248, 0.8)",  // 1: Sky-400
      "rgba(34, 211, 238, 0.7)",  // 2: Cyan-400
      "rgba(59, 130, 246, 0.7)",  // 3: Blue-500
      "rgba(29, 78, 216, 0.6)",   // 4: Blue-700
    ];

    const spawnParticle = (): Particle => {
      const avatarCenterX = width / 2;
      const avatarCenterY = padTop + size / 2;
      const radius = size / 2;

      // Emit from the bottom half-circle of the avatar (angle PI/4 to 3*PI/4)
      const angle = Math.PI * (0.15 + Math.random() * 0.7);
      // Position slightly offset from the rim of the avatar
      const startRadius = radius * (0.95 + Math.random() * 0.15);

      const x = avatarCenterX + Math.cos(angle) * startRadius;
      const y = avatarCenterY + Math.sin(angle) * startRadius;

      // Force-direction: float upwards and slightly away from the center line
      const dirX = x - avatarCenterX;
      const vx = dirX * 0.04 + (Math.random() - 0.5) * 0.6;
      const vy = -1.2 - Math.random() * 1.6;

      const pSize = 1.2 + Math.random() * 2.8;
      const maxLife = 22 + Math.random() * 20;

      // Decide color tier
      const roll = Math.random();
      let color = fireColors[3]; // default blue
      if (roll > 0.85) {
        color = fireColors[0]; // white hot core
      } else if (roll > 0.6) {
        color = fireColors[1]; // sky
      } else if (roll > 0.3) {
        color = fireColors[2]; // cyan
      } else if (roll > 0.1) {
        color = fireColors[3]; // blue
      } else {
        color = fireColors[4]; // navy
      }

      return {
        x,
        y,
        vx,
        vy,
        size: pSize,
        maxLife,
        life: maxLife,
        color,
        flickerSpeed: 0.05 + Math.random() * 0.1,
      };
    };

    const drawLoop = () => {
      // Clear frame
      ctx.clearRect(0, 0, width, height);

      // Spawn rate based on size
      const spawnCount = 2;
      for (let i = 0; i < spawnCount; i++) {
        particles.push(spawnParticle());
      }

      // Additive screen blending for burning light overlay
      ctx.globalCompositeOperation = "lighter";

      particles = particles.filter((p) => {
        p.life--;

        // Physics: rise upward and add sine wave sway
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.y * 0.06 + p.life * p.flickerSpeed) * 0.3;

        // Shrink particle as it dies
        const lifeRatio = p.life / p.maxLife;
        const currentSize = p.size * lifeRatio;

        if (p.life <= 0 || currentSize <= 0) return false;

        // Draw soft particle gradient
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          currentSize * 1.6,
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(
          0.3,
          p.color.replace(/[\d.]+\)$/, `${lifeRatio * 0.6})`),
        );
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, currentSize * 2, 0, Math.PI * 2);
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
        className,
      )}
      style={{ width: size, height: size }}
    >
      {/* 1. Real Burning Particle Fire Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute pointer-events-none filter blur-[0.4px]"
        style={{
          width: size + 28,
          height: size + 34,
          top: -26,
          left: -14,
          zIndex: 30,
        }}
      />

      {/* 2. Glow Aura (Behind border) */}
      <div
        className="absolute rounded-full bg-[conic-gradient(from_0deg,#60a5fa,#38bdf8,#1d4ed8,#60a5fa)] animate-[spin_5s_linear_infinite] filter blur-sm opacity-75"
        style={{
          width: size + 4,
          height: size + 4,
          zIndex: 0,
        }}
      />

      {/* 3. Rotating Premium Conic-Gradient Border Ring */}
      <div
        className="absolute rounded-full bg-[conic-gradient(from_0deg,#3b82f6,#06b6d4,#1d4ed8,#3b82f6)] animate-[spin_4s_linear_infinite] p-[1.5px]"
        style={{
          width: size,
          height: size,
          zIndex: 10,
        }}
      >
        {/* 4. Inner Avatar Body (Image or Letter) */}
        <div
          className="w-full h-full rounded-full bg-background flex items-center justify-center text-foreground font-extrabold shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] relative overflow-hidden"
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
              {/* Subtle core radial gradient behind text */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_70%)] pointer-events-none" />
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
