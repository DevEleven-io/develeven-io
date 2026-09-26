import { TokenUSDC, TokenUSDT } from "@token-icons/react";
import { cn } from "@/lib/utils";

export function UsdcIcon({ className }: { className?: string }) {
  return <TokenUSDC variant="branded" className={cn("shrink-0", className)} />;
}

export function UsdtIcon({ className }: { className?: string }) {
  return <TokenUSDT variant="branded" className={cn("shrink-0", className)} />;
}
