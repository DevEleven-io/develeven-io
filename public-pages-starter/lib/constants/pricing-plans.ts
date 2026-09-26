export const TIERS = ["free", "pro", "plus", "enterprise"] as const;

export type PricingTier = (typeof TIERS)[number];

export interface PricingPlan {
  id: PricingTier;
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  originalMonthlyPrice?: number | null; // Original/strikethrough monthly price
  originalYearlyPrice?: number | null; // Original/strikethrough yearly price
  features: string[];
  cta: string;
  href: string;
  popular: boolean;
  badge?: string | null;
}

export interface FeatureComparisonRow {
  label: string;
  free: boolean | string;
  pro: boolean | string;
  plus: boolean | string;
  enterprise: boolean | string;
}

/**
 * Single source of truth for DevEleven subscription tiers and pricing plans.
 * Used across marketing pricing page, dashboard settings, and Solana Pay subscription checkout.
 */
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Perfect for earners getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    originalMonthlyPrice: null,
    originalYearlyPrice: null,
    features: [
      "Browse available tasks",
      "Complete tasks to earn",
      "Basic earnings dashboard",
      "Standard support",
    ],
    cta: "Get Started Free",
    href: "/signin",
    popular: false,
    badge: null,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For creators & brands going viral",
    monthlyPrice: 6,
    yearlyPrice: 5,
    originalMonthlyPrice: 9,
    originalYearlyPrice: 8,
    features: [
      "Launch & manage campaigns",
      "1 task creation per day",
      "20 initial points + 5 pts daily",
      "Priority support",
      "Pro avatar animation glow",
    ],
    cta: "Upgrade to Pro",
    href: "/signin",
    popular: true,
    badge: "Most Popular",
  },
  {
    id: "plus",
    name: "Plus",
    tagline: "For power creators",
    monthlyPrice: 19,
    yearlyPrice: 16,
    originalMonthlyPrice: 29,
    originalYearlyPrice: 26,
    features: [
      "Everything in Pro, plus:",
      "Priority campaign placement",
      "5 task creations per day",
      "100 initial points + 20 pts daily",
      "Plus avatar animation glow",
      "Dedicated chat support",
    ],
    cta: "Upgrade to Plus",
    href: "/signin",
    popular: false,
    badge: null,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For agencies & large operations",
    monthlyPrice: 39,
    yearlyPrice: 33,
    originalMonthlyPrice: 59.99,
    originalYearlyPrice: 45,
    features: [
      "Everything in Plus, plus:",
      "Unlimited task creations",
      "500 initial points + 20 pts daily",
      "24/7 priority support & SLA",
      "Custom verification rules",
      "Dedicated account manager",
    ],
    cta: "Upgrade to Enterprise",
    href: "/signin",
    popular: false,
    badge: null,
  },
];

export const PRICING_FEATURE_COMPARISON: FeatureComparisonRow[] = [
  {
    label: "Verified human network",
    free: true,
    pro: true,
    plus: true,
    enterprise: true,
  },
  {
    label: "Task browsing & completion",
    free: true,
    pro: true,
    plus: true,
    enterprise: true,
  },
  {
    label: "Earnings dashboard",
    free: true,
    pro: true,
    plus: true,
    enterprise: true,
  },
  {
    label: "Campaign management",
    free: false,
    pro: true,
    plus: true,
    enterprise: true,
  },
  {
    label: "Advanced analytics",
    free: false,
    pro: true,
    plus: true,
    enterprise: true,
  },
  {
    label: "Avatar tier animation",
    free: false,
    pro: "Pro glow",
    plus: "Plus glow",
    enterprise: "Plus glow",
  },
  {
    label: "Demographic targeting",
    free: false,
    pro: true,
    plus: true,
    enterprise: true,
  },
  {
    label: "Campaign scheduling",
    free: false,
    pro: true,
    plus: true,
    enterprise: true,
  },
  {
    label: "Priority support",
    free: false,
    pro: true,
    plus: true,
    enterprise: true,
  },
  {
    label: "Team members",
    free: false,
    pro: "Up to 3",
    plus: "Up to 5",
    enterprise: "Up to 20",
  },
  {
    label: "API & Webhooks",
    free: false,
    pro: false,
    plus: false,
    enterprise: true,
  },
  {
    label: "White-label reports",
    free: false,
    pro: false,
    plus: false,
    enterprise: true,
  },
  {
    label: "Dedicated account manager",
    free: false,
    pro: false,
    plus: false,
    enterprise: true,
  },
  {
    label: "Custom verification rules",
    free: false,
    pro: false,
    plus: false,
    enterprise: true,
  },
  {
    label: "SLA guarantee",
    free: false,
    pro: false,
    plus: false,
    enterprise: true,
  },
];

/**
 * Helper to fetch a plan by ID
 */
export function getPricingPlanById(
  planId: string,
): PricingPlan | undefined {
  return PRICING_PLANS.find(
    (p) => p.id.toLowerCase() === planId.toLowerCase(),
  );
}

/**
 * Calculates authoritative price in USDC for a given plan and billing interval.
 * Used on server mutations to prevent frontend price tampering.
 */
export function calculatePlanPrice(
  planId: string,
  billingInterval: "monthly" | "annual",
): number | null {
  const plan = getPricingPlanById(planId);
  if (!plan || plan.monthlyPrice === null) {
    return null;
  }
  if (billingInterval === "annual" && plan.yearlyPrice !== null) {
    return plan.yearlyPrice * 12;
  }
  return plan.monthlyPrice;
}
