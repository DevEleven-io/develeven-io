"use client";

import { HeroSection } from "@/components/hero/hero-section";
import { LoginForm } from "@/components/login-form";

export default function Login() {
  return (
    <HeroSection
      mode="auto"
      autoIntervalMs={5000}
      leftActions={() => null}
      rightContent={() => <LoginForm />}
    />
  );
}
