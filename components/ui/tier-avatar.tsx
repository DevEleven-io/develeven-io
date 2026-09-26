"use client";

import { useState } from "react";
import { ElectricAvatarGlow } from "@/components/ui/electric-avatar-glow";
import { EmeraldAvatarGlow } from "@/components/ui/emerald-avatar-glow";
import { ProAvatarGlow } from "@/components/ui/pro-avatar-glow";
import { SolarAvatarGlow } from "@/components/ui/solar-avatar-glow";
import { VoidAvatarGlow } from "@/components/ui/void-avatar-glow";
import { cn } from "@/lib/utils";

export interface TierAvatarProps {
  initial: string;
  avatarUrl?: string | null;
  tier?: string | null;
  size?: number; // default 36
  className?: string;
}

export function TierAvatar({
  initial,
  avatarUrl,
  tier,
  size = 36,
  className,
}: TierAvatarProps) {
  const [imgError, setImgError] = useState(false);
  const effectiveAvatarUrl = imgError ? null : avatarUrl;

  const rawTier = (tier || "free").toLowerCase();
  const isPro = rawTier === "pro";
  const isPlus = rawTier === "plus" || rawTier === "enterprise";

  // Determine active animation key based on tier
  let activeAnimation: string | null = null;
  if (isPro) {
    activeAnimation = "purple-flame";
  } else if (isPlus) {
    activeAnimation = "electric-cyber";
  }

  if (activeAnimation) {
    switch (activeAnimation) {
      case "electric-cyber":
        return (
          <ElectricAvatarGlow
            initial={initial}
            avatarUrl={effectiveAvatarUrl}
            size={size}
            className={className}
          />
        );
      case "solar-gold":
        return (
          <SolarAvatarGlow
            initial={initial}
            avatarUrl={effectiveAvatarUrl}
            size={size}
            className={className}
          />
        );
      case "emerald-matrix":
        return (
          <EmeraldAvatarGlow
            initial={initial}
            avatarUrl={effectiveAvatarUrl}
            size={size}
            className={className}
          />
        );
      case "void-crimson":
        return (
          <VoidAvatarGlow
            initial={initial}
            avatarUrl={effectiveAvatarUrl}
            size={size}
            className={className}
          />
        );
      case "purple-flame":
      default:
        return (
          <ProAvatarGlow
            initial={initial}
            avatarUrl={effectiveAvatarUrl}
            size={size}
            className={className}
          />
        );
    }
  }

  // Standard non-animated fallback avatar for free tier users
  return (
    <div
      className={cn(
        "relative flex items-center justify-center shrink-0 rounded-full select-none overflow-hidden bg-muted text-muted-foreground font-bold border border-border",
        className
      )}
      style={{ width: size, height: size, fontSize: `${size * 0.4}px` }}
    >
      {effectiveAvatarUrl ? (
        <img
          src={effectiveAvatarUrl}
          alt="User Avatar"
          className="w-full h-full object-cover rounded-full"
          onError={() => setImgError(true)}
        />
      ) : (
        <span>{initial}</span>
      )}
    </div>
  );
}
