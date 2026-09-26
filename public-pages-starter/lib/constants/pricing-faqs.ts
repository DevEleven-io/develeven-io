import type { FAQ } from "@/components/faq-accordion";

export const PRICING_FAQS: FAQ[] = [
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes. You can upgrade or downgrade your plan at any time. When upgrading, you get immediate access to new features and are prorated for the remainder of the billing cycle. When downgrading, your new plan takes effect at the end of the current cycle.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Absolutely. Every paid plan comes with a 14-day free trial — no credit card required. You get full access to all features during the trial period. Cancel anytime before the trial ends and you won't be charged.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept USDC and USDT on Solana via Solana Pay. We recommend scanning the QR code using Solflare wallet for instant verification and activation.",
  },
  {
    question: "Why are some wallets not currently supported for QR scanning?",
    answer:
      "Solana Pay QR codes carry payment metadata (amount, SPL token mint, reference key, and memo) inside the URL query string. Solflare correctly parses all URI query parameters per the Solana Pay specification. Other wallet scanners currently fail to parse these custom query parameters properly and drop the payment metadata, falling back to a generic transfer. Using Solflare ensures your payment reference is attached so your subscription activates automatically.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. The plan price you see is the price you pay. There are no setup fees, cancellation fees, or surprise charges. The only additional cost is the standard 5% platform fee on each completed engagement task, which is clearly shown at checkout.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes! All annual plans are discounted approximately 20% compared to monthly billing. You can switch from monthly to annual at any time, and you'll be credited for the remaining months on your current billing cycle.",
  },
];
