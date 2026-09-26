"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export type Theme = "dark" | "light" | "system";

export const AUTH_ROUTE_PREFIXES = [
  "/dashboard",
  "/home",
  "/explore",
  "/tasks",
  "/settings",
  "/withdraw",
  "/points",
  "/avatar-preview",
];

export function isAuthRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  return AUTH_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/")
  );
}

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "dark" | "light";
  setTheme: (theme: Theme) => void;
  isPublicScope: boolean;
  setIsPublicScope: (isPublic: boolean) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  resolvedTheme: "light",
  setTheme: () => {},
  isPublicScope: false,
  setIsPublicScope: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(resolved: "dark" | "light") {
  const root = document.documentElement;
  if (resolved === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    return (localStorage.getItem("develeven-theme") as Theme) || "light";
  } catch {
    return "light";
  }
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light");
  const [isPublicScope, setIsPublicScope] = useState<boolean>(false);

  // Sync theme changes with DOM element synchronously before browser paint
  useIsomorphicLayoutEffect(() => {
    const currentPref = (localStorage.getItem("develeven-theme") as Theme | null) || theme;
    const resolved = currentPref === "system" ? getSystemTheme() : currentPref;
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, [theme]);

  // Sync with system preference changes when mode is "system"
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const resolved = e.matches ? "dark" : "light";
      setResolvedTheme(resolved);
      applyTheme(resolved);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    localStorage.setItem("develeven-theme", next);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        isPublicScope,
        setIsPublicScope,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
