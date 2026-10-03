import type { StaticImageData } from "next/image";
import img_11 from "@/public/images/3.D7lUqJdp_226qzY_w4Ik.webp";
import img_14 from "@/public/images/4.DtFIhgHK_Z254qIR_w4Ik.webp";
import img_18 from "@/public/images/dashboard.BrPmTcfd_1b0gWx_w4Ik.webp";

export interface HeroSlideStat {
  number: string;
  label: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  bgColor: string;
  isLightSlide: boolean;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  image?: StaticImageData | string;
  badgeTitle?: string;
  stats?: HeroSlideStat[];
}

export const SOLFLARE_HERO_SLIDES: HeroSlide[] = [
  {
    id: "engineering",
    eyebrow: "01 / WEB & SOFTWARE ENGINEERING",
    heading: "Turning ideas into high-performance digital reality",
    body: "We engineer lightning-fast websites, modern cloud applications, and elegant digital platforms with pixel-perfect design and zero bloat.",
    bgColor: "var(--brand-primary)", // Sky Blue — primary/signature brand color
    isLightSlide: true,
    primaryCtaText: "Hire Us",
    primaryCtaHref: "/support",
    secondaryCtaText: "Our Services",
    secondaryCtaHref: "#services",
    image: img_18,
    badgeTitle: "01 / Web & Cloud Engineering",
    stats: [
      { number: "50+", label: "Projects Completed" },
      { number: "100%", label: "Client Satisfaction" },
    ],
  },
  {
    id: "backend",
    eyebrow: "02 / ROBUST BACKEND & APIS",
    heading: "Scalable server architectures built for speed",
    body: "From custom APIs to resilient cloud services, we build secure, maintainable server backends using Node.js, Python, FastAPI, and modern databases.",
    bgColor: "var(--brand-accent-3)", // Mint Emerald — API Integration card
    isLightSlide: true,
    primaryCtaText: "Get in Touch",
    primaryCtaHref: "/support",
    secondaryCtaText: "Tech Stack",
    secondaryCtaHref: "#tech",
    image: img_14,
    badgeTitle: "02 / API & Systems Architecture",
    stats: [
      { number: "< 50ms", label: "Avg API Latency" },
      { number: "100%", label: "Type-Safe Delivery" },
    ],
  },
  {
    id: "design",
    eyebrow: "03 / TAILORED PRODUCT DESIGN",
    heading: "Elegant websites crafted at affordable prices",
    body: "We transform your vision into unique digital products that inspire you and your customers. High-converting UI/UX built with Next.js, React, and Tailwind CSS.",
    bgColor: "var(--brand-accent-4)", // Rich Raspberry — Custom Product card
    isLightSlide: false,
    primaryCtaText: "Start Your Project",
    primaryCtaHref: "/support",
    secondaryCtaText: "Explore Pricing",
    secondaryCtaHref: "/pricing",
    image: img_11,
    badgeTitle: "03 / UI/UX & Frontend Excellence",
    stats: [
      { number: "24/7", label: "Dedicated Support" },
      { number: "Clean", label: "Modern Code Standards" },
    ],
  },
];

