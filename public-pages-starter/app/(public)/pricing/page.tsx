"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FAQAccordion } from "@/components/faq-accordion";
import { PRICING_FAQS } from "@/lib/constants/pricing-faqs";
import {
  PRICING_FEATURE_COMPARISON,
  PRICING_PLANS,
  TIERS,
  type PricingPlan,
  type PricingTier,
} from "@/lib/constants/pricing-plans";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { UsdcIcon, UsdtIcon } from "@/components/icons/stablecoins";
import { SubscriptionDialog } from "@/components/solana-pay-dialog";
import {
  ArrowRight,
  Check,
  HelpCircle,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import {
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa6";

export default function PricingPage() {
  const router = useRouter();
  // Standalone auth and subscription states — wire to your backend or payment provider as needed
  const currentUser: { tier?: string } | null = null;
  const activeSub: { effectiveEndsAt?: number; endsAt?: number } | null = null;
  const [annual, setAnnual] = useState(false);
  const [selectedPlanForUpgrade, setSelectedPlanForUpgrade] =
    useState<PricingPlan | null>(null);
  const [isAdvanceMode, setIsAdvanceMode] = useState(false);
  const [isUpgradeDialogOpen, setIsUpgradeDialogOpen] = useState(false);

  const rawTier = (currentUser as { tier?: string } | null)?.tier?.toLowerCase() || "";
  const userTier: PricingTier = (
    ["pro", "plus", "enterprise"].includes(rawTier) ? rawTier : "free"
  ) as PricingTier;

  const activeEndsAt = (activeSub as { effectiveEndsAt?: number; endsAt?: number } | null)?.effectiveEndsAt ?? (activeSub as { effectiveEndsAt?: number; endsAt?: number } | null)?.endsAt;

  const handlePlanCtaClick = (plan: PricingPlan, isAdvance = false) => {
    router.push("/support");
  };

  return (
    <div className="flex flex-col bg-zinc-950 text-foreground min-h-screen">
      {/* 1. Hero Canvas & Billing Switcher Module */}
      <section className="w-full px-1.5 sm:px-3 pt-2 sm:pt-3 pb-2 sm:pb-3 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white px-6 sm:px-12 lg:px-16 py-16 sm:py-24 shadow-2xl text-center">
          {/* Solflare two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/10 pointer-events-none z-0" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <span className="font-mono text-xs sm:text-sm tracking-widest text-zinc-400 font-normal mb-3 sm:mb-4 block">
              Transparent crypto subscriptions
            </span>

            <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
              Choose the plan that fits your growth
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
              All plans include access to our verified human network. Real engagement, zero bots, and smart escrow security. Pay seamlessly via Solana Pay.
            </p>

            {/* Billing Interval Toggle Pill Rail */}
            <div className="inline-flex items-center rounded-full bg-zinc-950 border border-white/10 p-1.5 shadow-xl">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setAnnual(false)}
                className={`h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-full transition-all cursor-pointer shadow-none ${
                  !annual
                    ? "bg-white text-zinc-950 hover:bg-white hover:text-zinc-950 shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Monthly
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setAnnual(true)}
                className={`h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-full transition-all cursor-pointer shadow-none inline-flex items-center gap-2 ${
                  annual
                    ? "bg-white text-zinc-950 hover:bg-white hover:text-zinc-950 shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Annual</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Save 20%
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Guarantees Stats Module (Cyan/Sky Accent #38bdf8) */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-[#38bdf8] text-zinc-950 px-6 sm:px-12 lg:px-16 py-12 sm:py-16 shadow-2xl">
          {/* Two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/5 pointer-events-none z-0" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center items-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                0%
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-zinc-950/80">
                Hidden fees
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                100%
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-zinc-950/80">
                Code ownership &amp; clean design
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                1-4 wks
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-zinc-950/80">
                Fast sprint delivery
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                24/7
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-zinc-950/80">
                Direct engineer support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Plans Showcase (Architectural Canvases) */}
      <section className="w-full px-1.5 sm:px-3 py-4 sm:py-6 bg-zinc-950">
        <div className="w-full max-w-screen-2xl mx-auto mb-8 sm:mb-12 text-center pt-8 sm:pt-14 px-4">
          <span className="font-mono text-xs sm:text-sm tracking-widest text-zinc-400 font-normal mb-3 block">
            Flexible packages
          </span>
          <h2 className="font-brand text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.05]">
            Transparent engineering packages
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">
            High-caliber web design, full-stack development, and dedicated software solutions with zero surprises.
          </p>
        </div>

        <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const hasPrice =
              plan.monthlyPrice !== null && plan.monthlyPrice > 0;
            const displayPrice = annual
              ? plan.yearlyPrice
              : plan.monthlyPrice;
            const originalPrice = annual
              ? plan.originalYearlyPrice
              : plan.originalMonthlyPrice;

            const isCurrentTier = Boolean(
              currentUser && userTier === plan.id.toLowerCase(),
            );
            const isCurrentFree = Boolean(
              isCurrentTier && userTier === "free",
            );
            const isPaidCurrentTier = Boolean(
              isCurrentTier && userTier !== "free",
            );

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white p-7 sm:p-9 lg:p-10 shadow-2xl flex flex-col justify-between ${
                  plan.popular
                    ? "ring-2 ring-primary/50"
                    : ""
                }`}
              >
                {/* Solflare two-tone vertical split overlay */}
                <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-white/[0.02] pointer-events-none z-0" />

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-6 right-6 px-3.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold tracking-wide shadow-md">
                    Most popular
                  </div>
                )}

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Eyebrow & Name */}
                  <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 mb-2 block">
                    0{idx + 1} / {plan.name}
                  </span>
                  <h3 className="font-brand text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-zinc-400 font-normal mt-1 min-h-10 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price & Billing */}
                  <div className="mt-6 mb-6">
                    {originalPrice && originalPrice > (displayPrice ?? 0) ? (
                      <div className="flex items-center gap-2 mb-2 h-6">
                        <span className="text-sm font-bold text-zinc-500 line-through decoration-rose-500/80 decoration-1">
                          ${originalPrice}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {Math.round(
                            ((originalPrice - (displayPrice ?? 0)) /
                              originalPrice) *
                              100,
                          )}
                          % off
                        </span>
                      </div>
                    ) : (
                      <div className="h-6 mb-2" />
                    )}

                    <div className="flex items-center gap-3">
                      {hasPrice && (
                        <div className="flex -space-x-1.5 shrink-0 select-none">
                          <UsdcIcon className="size-6 rounded-full ring-2 ring-zinc-900 z-10" />
                          <UsdtIcon className="size-6 rounded-full ring-2 ring-zinc-900" />
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        {plan.monthlyPrice !== null ? (
                          <>
                            <span className="font-brand text-4xl sm:text-5xl font-bold text-white tracking-tight">
                              ${displayPrice}
                            </span>
                            <span className="text-sm font-medium text-zinc-400">
                              /mo
                            </span>
                          </>
                        ) : (
                          <span className="font-brand text-4xl sm:text-5xl font-bold text-white tracking-tight">
                            Custom
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mt-3 min-h-5">
                      {hasPrice && plan.yearlyPrice !== null && annual ? (
                        <span className="text-xs font-medium text-emerald-400">
                          ${plan.yearlyPrice * 12} billed annually (save $
                          {plan.monthlyPrice! * 12 - plan.yearlyPrice * 12})
                        </span>
                      ) : hasPrice ? (
                        <span className="text-xs font-medium text-zinc-400">
                          Billed monthly &bull; Cancel anytime
                        </span>
                      ) : plan.monthlyPrice === 0 ? (
                        <span className="text-xs font-medium text-zinc-400">
                          Free forever &bull; No card required
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-zinc-400">
                          Tailored volume &amp; dedicated SLA
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Solflare Divider */}
                  <div className="border-t border-white/10 my-4" />

                  {/* Features List */}
                  <ul className="flex flex-col gap-3 flex-1 mb-8" role="list">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-3 text-sm text-zinc-300 font-normal leading-relaxed"
                      >
                        <span className="flex size-5 items-center justify-center rounded-full bg-white/10 text-white shrink-0 mt-0.5">
                          <Check className="size-3 text-white" strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action Button */}
                <div className="relative z-10 pt-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <Button
                      className={`h-12 sm:h-14 rounded-full px-6 text-base font-semibold border-0 cursor-pointer transition-transform hover:scale-105 inline-flex items-center justify-center gap-2 flex-1 ${
                        plan.popular || isPaidCurrentTier
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl font-bold"
                          : "bg-white text-zinc-950 hover:bg-zinc-100 shadow-md font-semibold"
                      }`}
                      id={`plan-cta-${plan.id}`}
                      onClick={() => {
                        if (isCurrentFree) {
                          router.push("/dashboard");
                          return;
                        }
                        handlePlanCtaClick(plan, isPaidCurrentTier);
                      }}
                    >
                      <span>
                        {isPaidCurrentTier
                          ? "Pay in advance"
                          : isCurrentFree
                            ? "Current plan"
                            : plan.cta}
                      </span>
                      <ArrowRight className="size-4" />
                    </Button>

                    {isPaidCurrentTier && (
                      <Tooltip
                        className="bg-zinc-900 border border-white/10 text-white p-3 rounded-xl max-w-xs"
                        side="top"
                        content={
                          <div className="space-y-1 text-left">
                            <p className="font-bold text-white text-xs">
                              Advance renewal
                            </p>
                            <p className="text-zinc-400 text-xs leading-relaxed">
                              You already have an active subscription. Paying in advance extends your plan for the next billing cycle without losing remaining days.
                            </p>
                          </div>
                        }
                      >
                        <button
                          type="button"
                          aria-label="Advance payment information"
                          className="size-12 sm:size-14 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-help shrink-0"
                        >
                          <HelpCircle className="size-5" />
                        </button>
                      </Tooltip>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Platform Feature Comparison Module */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 bg-zinc-950">
        <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl">
          {/* Solflare two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/5 pointer-events-none z-0" />

          <div className="relative z-10 max-w-screen-2xl mx-auto">
            <span className="font-mono text-xs sm:text-sm tracking-widest text-zinc-400 font-normal mb-3 block">
              Feature comparison
            </span>
            <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.08]">
              Everything included in each tier
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-8 max-w-2xl">
              Compare capabilities across all plans. Every tier has zero cashout fees and access to the verified human network.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 sm:px-6 font-semibold text-zinc-400">
                      Feature
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-zinc-400 w-28 sm:w-36">
                      Free
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-primary w-28 sm:w-36">
                      Pro
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-white w-28 sm:w-36">
                      Plus
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-white w-28 sm:w-36">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_FEATURE_COMPARISON.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white/10 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-4 px-4 sm:px-6 text-white font-medium">
                        {row.label}
                      </td>
                      {TIERS.map((tier) => (
                        <td key={tier} className="text-center py-4 px-4">
                          {row[tier] === true ? (
                            <span className="inline-flex size-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mx-auto">
                              <Check className="size-3.5" strokeWidth={3} />
                            </span>
                          ) : row[tier] === false ? (
                            <span className="text-zinc-600 text-sm">—</span>
                          ) : (
                            <span className="text-zinc-300 text-sm font-medium">
                              {String(row[tier])}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ & Settlement Directory Section (Solflare 1:1 Two-Part Layout) */}
      <section id="faq" className="w-full px-1.5 sm:px-3 py-2 sm:py-3 bg-zinc-950">
        <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-stretch">
          {/* Left Column: FAQ Accordion Module */}
          <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs sm:text-sm tracking-widest text-zinc-400 font-normal mb-4 block">
                01 / Frequently asked questions
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.08]">
                Answers about plans &amp; billing
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-8">
                Everything you need to know about Solana Pay subscriptions, plan upgrades, and non-custodial crypto checkout.
              </p>
              <div>
                <FAQAccordion faqs={PRICING_FAQS} />
              </div>
            </div>

            {/* Bottom Actions: Matching Solflare's 2 pill buttons */}
            <div className="pt-8 mt-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/signin"
                className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold bg-zinc-800 hover:bg-zinc-700 text-white inline-flex items-center justify-center transition-colors shadow-md min-w-40 sm:min-w-48 text-center"
              >
                Start earning
              </Link>
              <Link
                href="/signin"
                className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold bg-zinc-800 hover:bg-zinc-700 text-white inline-flex items-center justify-center transition-colors shadow-md min-w-40 sm:min-w-48 text-center"
              >
                Launch campaign
              </Link>
            </div>
          </div>

          {/* Right Column: Platform Directory Module */}
          <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col my-auto">
              {/* Group 1: PAYMENTS */}
              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    PAYMENTS
                  </span>
                </div>
                <div className="col-span-8 sm:col-span-9 text-right">
                  <span className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white">
                    USDC &amp; USDT (Solana)
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <span className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white">
                    Solflare (QR support)
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <span className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white">
                    0% Fee non-custodial
                  </span>
                </div>
              </div>

              {/* Group 2: SECURITY */}
              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center mt-3 sm:mt-5">
                <div className="col-span-4 sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    SECURITY
                  </span>
                </div>
                <div className="col-span-8 sm:col-span-9 text-right">
                  <span className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white">
                    30-Day drop shield
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <span className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white">
                    Sub-second vision AI
                  </span>
                </div>
              </div>

              {/* Group 3: SUPPORT */}
              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center mt-3 sm:mt-5">
                <div className="col-span-4 sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    SUPPORT
                  </span>
                </div>
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link
                    href="/support"
                    className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors cursor-pointer"
                  >
                    24/7 Live ticket
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <a
                    href="https://github.com/DEVELEVEN-io"
                    target="_blank"
                    rel="noreferrer"
                    className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    GitHub @DEVELEVEN-io
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link
                    href="/privacy"
                    className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link
                    href="/terms"
                    className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>

              {/* Bottom enclosing line */}
              <div className="border-t border-white/10" />
            </div>

            {/* Bottom Row: Circular Social Icon Buttons */}
            <div className="pt-6 sm:pt-8 flex items-center justify-end gap-3 sm:gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="size-12 sm:size-14 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors shadow-md shrink-0"
              >
                <FaXTwitter className="size-5 sm:size-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="size-12 sm:size-14 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors shadow-md shrink-0"
              >
                <FaYoutube className="size-5 sm:size-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="size-12 sm:size-14 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors shadow-md shrink-0"
              >
                <FaLinkedinIn className="size-5 sm:size-6" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="size-12 sm:size-14 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors shadow-md shrink-0"
              >
                <FaDiscord className="size-5 sm:size-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pre-Footer CTA Canvas (Solid Royal Indigo Canvas #4640C1) */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 pb-8 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-[#4640C1] text-white p-10 sm:p-16 lg:p-20 shadow-2xl text-center">
          {/* Solflare two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/10 pointer-events-none z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="font-mono text-xs sm:text-sm tracking-widest text-sky-200 font-normal mb-4">
              READY TO BUILD?
            </p>
            <h2 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.08] text-white">
              Turn your digital idea into reality
            </h2>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
              Get in touch with DevEleven today to discuss your technical architecture, sprint timeline, or custom project quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-lg font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56"
              >
                <Link href="/support" className="flex items-center justify-center gap-2.5">
                  <TrendingUp className="size-5 text-zinc-950 shrink-0" strokeWidth={2.5} />
                  <span>Request a quote</span>
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-lg font-medium border-0 bg-zinc-950 text-white hover:bg-black shadow-xl cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56"
              >
                <Link href="/#services" className="flex items-center justify-center gap-2.5">
                  <Sparkles className="size-5 text-sky-400 shrink-0" strokeWidth={2.5} />
                  <span>Our services</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer Section */}
      <Footer />

      {/* Solana Pay Subscription Checkout Dialog */}
      <SubscriptionDialog
        isOpen={isUpgradeDialogOpen}
        onClose={() => {
          setIsUpgradeDialogOpen(false);
          setIsAdvanceMode(false);
        }}
        selectedPlan={selectedPlanForUpgrade}
        billingInterval={annual ? "annual" : "monthly"}
        isAdvancePayment={isAdvanceMode}
        currentPeriodEndsAt={activeEndsAt}
      />
    </div>
  );
}
