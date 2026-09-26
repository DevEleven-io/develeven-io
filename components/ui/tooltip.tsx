"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({
  content,
  children,
  className,
  side = "top",
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            "absolute z-50 w-64 p-3 text-xs font-normal leading-relaxed text-popover-foreground bg-popover rounded-lg border border-border shadow-md pointer-events-none transition-all duration-150 animate-in fade-in-0 zoom-in-95",
            side === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2",
            side === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2",
            side === "left" && "right-full top-1/2 -translate-y-1/2 mr-2",
            side === "right" && "left-full top-1/2 -translate-y-1/2 ml-2",
            className,
          )}
        >
          {content}
          {/* Arrow */}
          <div
            className={cn(
              "absolute size-2 bg-popover rotate-45 border-border",
              side === "top" && "left-1/2 -translate-x-1/2 bottom-[-4px] border-r border-b",
              side === "bottom" && "left-1/2 -translate-x-1/2 top-[-4px] border-l border-t",
              side === "left" && "top-1/2 -translate-y-1/2 right-[-4px] border-r border-t",
              side === "right" && "top-1/2 -translate-y-1/2 left-[-4px] border-l border-b",
            )}
          />
        </div>
      )}
    </div>
  );
}
