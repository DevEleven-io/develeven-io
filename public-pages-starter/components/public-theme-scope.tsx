"use client";

import { useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

export function PublicThemeScope({ children }: { children: React.ReactNode }) {
  const { setIsPublicScope } = useTheme();

  useEffect(() => {
    setIsPublicScope(true);
    return () => {
      setIsPublicScope(false);
    };
  }, [setIsPublicScope]);

  return <>{children}</>;
}
