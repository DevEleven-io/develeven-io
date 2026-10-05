"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useAuthActions } from "@convex-dev/auth/react";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface LoginFormProps {
  isLightSlide?: boolean;
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const { signIn } = useAuthActions();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<"github" | "google" | null>(null);

  const getFriendlyError = (raw: string): string => {
    const msg = raw.toLowerCase();
    if (
      msg.includes("invalid credentials") ||
      msg.includes("invalidaccountid") ||
      msg.includes("invalidsecret") ||
      msg.includes("invalid secret")
    ) {
      return "Incorrect email or password.";
    }
    if (msg.includes("missing `password`")) {
      return "Please enter a password.";
    }
    if (msg.includes("does not exist") || msg.includes("no account")) {
      return "No account found with that email address. Sign in with GitHub or Google instead.";
    }
    if (msg.includes("signupnotallowed")) {
      return "Sign-up via email/password is disabled. Use GitHub or Google.";
    }
    return "Incorrect email or password. If you signed up with GitHub or Google, use the social buttons.";
  };

  const handlePasswordSignIn = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    formData.set("flow", "signIn");
    try {
      await signIn("password", formData);
      router.push("/dashboard");
    } catch (err: unknown) {
      const raw = err instanceof Error ? err.message : String(err);
      setError(getFriendlyError(raw));
      setLoading(false);
    }
  };

  const handleOAuth = async (provider: "github" | "google") => {
    setOauthLoading(provider);
    setError(null);
    try {
      const redirectUrl =
        typeof window !== "undefined"
          ? `${window.location.origin}/dashboard`
          : "/dashboard";
      await signIn(provider, { redirectTo: redirectUrl });
    } catch (err: unknown) {
      const raw = err instanceof Error ? err.message : String(err);
      setError(raw || "OAuth sign-in failed. Please try again.");
      setOauthLoading(null);
    }
  };

  return (
    <div
      className={cn(
        "w-full max-w-[360px] sm:max-w-[400px] rounded-4xl sm:rounded-5xl bg-zinc-950/85 backdrop-blur-xl p-6 sm:p-8 shadow-2xl flex flex-col justify-center select-none",
        className,
      )}
    >
      {/* Form Header */}
      <div className="mb-5">
        <h2 className="font-brand text-2xl font-bold tracking-tight text-white mb-1">
          Welcome back
        </h2>
        <p className="text-sm font-normal text-zinc-400 leading-relaxed">
          Sign in to access your dashboard and rewards
        </p>
      </div>

      {/* Social Logins */}
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        <Button
          type="button"
          variant="outline"
          disabled={oauthLoading !== null || loading}
          onClick={() => handleOAuth("google")}
          className="h-11 rounded-xl font-semibold text-sm bg-zinc-900/90 text-white hover:bg-zinc-800 border border-zinc-800 shadow-xs cursor-pointer flex items-center justify-center gap-2 transition-all hover:border-zinc-700"
        >
          {oauthLoading === "google" ? (
            <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
          ) : (
            <FcGoogle className="size-4.5 shrink-0" />
          )}
          <span>Google</span>
        </Button>

        <Button
          type="button"
          variant="outline"
          disabled={oauthLoading !== null || loading}
          onClick={() => handleOAuth("github")}
          className="h-11 rounded-xl font-semibold text-sm bg-zinc-900/90 text-white hover:bg-zinc-800 border border-zinc-800 shadow-xs cursor-pointer flex items-center justify-center gap-2 transition-all hover:border-zinc-700"
        >
          {oauthLoading === "github" ? (
            <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
          ) : (
            <FaGithub className="size-4.5 shrink-0 text-white" />
          )}
          <span>GitHub</span>
        </Button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 my-3.5">
        <div className="h-px bg-zinc-800 flex-1" />
        <span className="text-xs font-normal text-zinc-400 whitespace-nowrap">
          or continue with email
        </span>
        <div className="h-px bg-zinc-800 flex-1" />
      </div>

      {/* Email / Password Form */}
      <form onSubmit={handlePasswordSignIn} className="flex flex-col gap-3 mt-1">
        <FieldGroup className="gap-3">
          <Field className="flex flex-col gap-1.5">
            <FieldLabel
              htmlFor="email"
              className="text-xs sm:text-sm font-medium text-zinc-200"
            >
              Email address
            </FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
              className="h-10 sm:h-11 rounded-xl text-sm bg-zinc-900/90 border border-zinc-800 text-white placeholder:text-zinc-500 focus-visible:border-zinc-700 focus-visible:ring-1 focus-visible:ring-zinc-700 shadow-xs outline-none transition-all"
            />
          </Field>

          <Field className="flex flex-col gap-1.5">
            <FieldLabel
              htmlFor="password"
              className="text-xs sm:text-sm font-medium text-zinc-200"
            >
              Password
            </FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="h-10 sm:h-11 rounded-xl text-sm bg-zinc-900/90 border border-zinc-800 text-white placeholder:text-zinc-500 focus-visible:border-zinc-700 focus-visible:ring-1 focus-visible:ring-zinc-700 shadow-xs outline-none transition-all"
            />
          </Field>
        </FieldGroup>

        {/* Error Alert */}
        {error && (
          <div className="flex gap-2.5 items-start p-3 bg-red-500/15 text-red-200 border border-red-500/30 rounded-xl text-xs font-medium animate-fade-in">
            <AlertCircle className="size-4 shrink-0 mt-0.5 text-red-400" />
            <span className="leading-normal">{error}</span>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          id="signin-password"
          disabled={loading || oauthLoading !== null}
          className="w-full h-10 sm:h-11 rounded-xl font-semibold text-sm shadow-md cursor-pointer transition-all duration-200 border-0 bg-white text-zinc-950 hover:bg-zinc-200 mt-1"
        >
          {loading ? (
            <span className="size-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
          ) : (
            "Sign in with email"
          )}
        </Button>
      </form>

      {/* Account note */}
      <p className="text-center text-xs text-zinc-400 mt-4 leading-relaxed">
        New here? Signing in with Google or GitHub creates your account automatically.
      </p>

      {/* Terms & Privacy */}
      <p className="text-center text-[11px] text-zinc-500 mt-2 leading-relaxed">
        By continuing, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-zinc-300 transition-colors"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-zinc-300 transition-colors"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}

export function OAuthLoginButtons() {
  const { signIn } = useAuthActions();
  const [oauthLoading, setOauthLoading] = useState<"github" | "google" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleOAuth = async (provider: "github" | "google") => {
    setOauthLoading(provider);
    setError(null);
    try {
      const redirectUrl =
        typeof window !== "undefined"
          ? `${window.location.origin}/dashboard`
          : "/dashboard";
      await signIn(provider, { redirectTo: redirectUrl });
    } catch (err: unknown) {
      const raw = err instanceof Error ? err.message : String(err);
      setError(raw || "OAuth sign-in failed. Please try again.");
      setOauthLoading(null);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-3">
        {/* Google OAuth Button */}
        <Button
          id="signin-google"
          type="button"
          disabled={oauthLoading !== null}
          onClick={() => handleOAuth("google")}
          className="h-11 rounded-xl px-5 text-sm font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-100 shadow-md cursor-pointer transition-all flex items-center gap-2"
        >
          {oauthLoading === "google" ? (
            <span className="size-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin shrink-0" />
          ) : (
            <FcGoogle className="size-4.5 shrink-0" />
          )}
          <span>Continue with Google</span>
        </Button>

        {/* GitHub OAuth Button */}
        <Button
          id="signin-github"
          type="button"
          disabled={oauthLoading !== null}
          onClick={() => handleOAuth("github")}
          className="h-11 rounded-xl px-5 text-sm font-semibold border border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 shadow-md cursor-pointer transition-all flex items-center gap-2"
        >
          {oauthLoading === "github" ? (
            <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
          ) : (
            <FaGithub className="size-4.5 shrink-0 text-white" />
          )}
          <span>Continue with GitHub</span>
        </Button>
      </div>

      {error && (
        <div className="flex gap-2.5 items-start p-2.5 bg-red-500/20 text-white border border-red-400/30 rounded-xl text-xs font-medium backdrop-blur-md animate-fade-in mt-2 max-w-md">
          <AlertCircle className="size-4 shrink-0 mt-0.5 text-red-200" />
          <span className="leading-normal">{error}</span>
        </div>
      )}
    </div>
  );
}
