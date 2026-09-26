"use client";

import { FAQAccordion } from "@/components/faq-accordion";
import { LANDING_FAQS } from "@/lib/constants/landing-faqs";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img_1 from "@/public/images/1_w4Ik.svg";
import img_2 from "@/public/images/2_w4Ik.svg";
import img_3 from "@/public/images/3_w4Ik.svg";
import img_4 from "@/public/images/4_w4Ik.svg";
import img_5 from "@/public/images/5_w4Ik.svg";
import Link from "next/link";
import { FaXTwitter, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { HeroSection } from "@/components/hero/hero-section";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Code2,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-950 text-foreground min-h-screen">

      {/* 1. Interactive Architectural Hero Section */}
      <HeroSection mode="scroll" />

      {/* 2. Trusted By Section (Solid Marquee) */}
      <section className="py-10 sm:py-14 text-foreground relative z-10 overflow-hidden bg-zinc-950">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col items-center">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 mb-8 sm:mb-10 text-center font-normal">
              Trusted by startups, founders &amp; modern product teams
            </p>
            <div className="w-full relative flex gap-x-12 sm:gap-x-20 overflow-hidden before:pointer-events-none before:absolute before:left-0 before:top-0 before:bottom-0 before:z-10 before:w-24 sm:before:w-36 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent after:pointer-events-none after:absolute after:right-0 after:top-0 after:bottom-0 after:z-10 after:w-24 sm:after:w-36 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent">
              <div className="flex shrink-0 items-center justify-around gap-x-16 sm:gap-x-24 animate-marquee min-w-full">
                <div className="h-10 sm:h-12 md:h-14 opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <Image src={img_1} alt="brand logo" className="h-full w-auto object-contain brightness-0 invert" />
                </div>
                <div className="h-10 sm:h-12 md:h-14 opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <Image src={img_2} alt="brand logo" className="h-full w-auto object-contain brightness-0 invert" />
                </div>
                <div className="h-10 sm:h-12 md:h-14 opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <Image src={img_3} alt="brand logo" className="h-full w-auto object-contain brightness-0 invert" />
                </div>
                <div className="h-10 sm:h-12 md:h-14 opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <Image src={img_4} alt="brand logo" className="h-full w-auto object-contain brightness-0 invert" />
                </div>
                <div className="h-10 sm:h-12 md:h-14 opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <Image src={img_5} alt="brand logo" className="h-full w-auto object-contain brightness-0 invert" />
                </div>
              </div>
              <div className="flex shrink-0 items-center justify-around gap-x-16 sm:gap-x-24 animate-marquee min-w-full" aria-hidden="true">
                <div className="h-10 sm:h-12 md:h-14 opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <Image src={img_1} alt="brand logo" className="h-full w-auto object-contain brightness-0 invert" />
                </div>
                <div className="h-10 sm:h-12 md:h-14 opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <Image src={img_2} alt="brand logo" className="h-full w-auto object-contain brightness-0 invert" />
                </div>
                <div className="h-10 sm:h-12 md:h-14 opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <Image src={img_3} alt="brand logo" className="h-full w-auto object-contain brightness-0 invert" />
                </div>
                <div className="h-10 sm:h-12 md:h-14 opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <Image src={img_4} alt="brand logo" className="h-full w-auto object-contain brightness-0 invert" />
                </div>
                <div className="h-10 sm:h-12 md:h-14 opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <Image src={img_5} alt="brand logo" className="h-full w-auto object-contain brightness-0 invert" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section: Key Stats (Sky/Cyan Accent Module) */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-[#38bdf8] text-zinc-950 px-6 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 shadow-2xl">
          {/* Two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/5 pointer-events-none z-0" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center items-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                50+
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80">
                Projects Completed
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                100%
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80">
                Client Satisfaction
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                04
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80">
                Core Engineers
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                24/7
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80">
                Support &amp; Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 02: Features Showcase - Two Screen-Height Rows with 2 Distinct Columns Each */}
      <section id="services" className="w-full px-1.5 sm:px-3 py-4 sm:py-6 bg-zinc-950">
        {/* Centered Section Header */}
        <div className="w-full max-w-screen-2xl mx-auto mb-8 sm:mb-12 text-center pt-8 sm:pt-14 px-4">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
            Core Engineering Services
          </span>
          <h2 className="font-brand text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.05]">
            Engineered for speed, performance &amp; scale
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Every layer of DevEleven is crafted to eliminate complexity and guarantee elegant, scalable software delivery.
          </p>
        </div>

        {/* Row 1: Two Screen-Height Columns */}
        <div className="w-full max-w-screen-2xl mx-auto min-h-[85vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4 lg:mb-6 items-stretch">
          {/* Column 1: Sky Accent #38bdf8 (Frontend Development) */}
          <div className="relative rounded-3xl sm:rounded-4xl bg-[#0284c7] text-white p-8 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-center text-left overflow-hidden shadow-2xl min-h-[480px] lg:min-h-0">
            {/* Split overlay */}
            <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/10 pointer-events-none z-0" />

            {/* Vertically Centered Typography & CTA */}
            <div className="relative z-10 max-w-xl">
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-200 mb-3 sm:mb-4 block">
                01 / Frontend Development
              </span>
              <h3 className="font-brand text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.06]">
                Modern, responsive &amp; intuitive web interfaces
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 font-normal leading-relaxed mb-8 sm:mb-10">
                Crafting pixel-perfect web experiences with React, Next.js, and Tailwind CSS. We prioritize fast load speeds, accessible layouts, and seamless user interaction on all screen sizes.
              </p>
              <div>
                <Button
                  asChild
                  className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl cursor-pointer transition-transform hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <Link href="/support">
                    <span>Discuss frontend</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Column 2: Cyan Accent #0891b2 (Backend & Cloud) */}
          <div className="relative rounded-3xl sm:rounded-4xl bg-[#0891b2] text-white p-8 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-center text-left overflow-hidden shadow-2xl min-h-[480px] lg:min-h-0">
            {/* Split overlay */}
            <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/10 pointer-events-none z-0" />

            {/* Vertically Centered Typography & CTA */}
            <div className="relative z-10 max-w-xl">
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-200 mb-3 sm:mb-4 block">
                02 / Backend &amp; Cloud Architecture
              </span>
              <h3 className="font-brand text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.06]">
                Robust server systems built to scale
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 font-normal leading-relaxed mb-8 sm:mb-10">
                From microservices and database modeling to bulletproof authentication and background task pipelines. Engineered with Node.js, Python, FastAPI, Prisma, and PostgreSQL.
              </p>
              <div>
                <Button
                  asChild
                  className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl cursor-pointer transition-transform hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <Link href="/pricing">
                    <span>See pricing plans</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Two Screen-Height Columns */}
        <div className="w-full max-w-screen-2xl mx-auto min-h-[85vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4 lg:mb-6 items-stretch">
          {/* Column 3: Mint Emerald #6EE7B7 (API Development) */}
          <div className="relative rounded-3xl sm:rounded-4xl bg-[#6EE7B7] text-zinc-950 p-8 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-center text-left overflow-hidden shadow-2xl min-h-[480px] lg:min-h-0">
            {/* Split overlay */}
            <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/5 pointer-events-none z-0" />

            {/* Vertically Centered Typography & CTA */}
            <div className="relative z-10 max-w-xl">
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/70 mb-3 sm:mb-4 block">
                03 / API &amp; Systems Integration
              </span>
              <h3 className="font-brand text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-zinc-950 mb-4 sm:mb-6 leading-[1.06]">
                Sub-50ms latency with clean documentation
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-900/80 font-normal leading-relaxed mb-8 sm:mb-10">
                Design and deployment of high-throughput REST and GraphQL APIs. Well-structured, fully typed contracts that allow your clients and services to interact without friction.
              </p>
              <div>
                <Button
                  asChild
                  className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0 bg-zinc-950 text-white hover:bg-black shadow-xl cursor-pointer transition-transform hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <Link href="#faq">
                    <span>See technical FAQ</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Column 4: Ocean Navy #0369a1 (Tailored Solutions) */}
          <div className="relative rounded-3xl sm:rounded-4xl bg-[#0369a1] text-white p-8 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-center text-left overflow-hidden shadow-2xl min-h-[480px] lg:min-h-0">
            {/* Split overlay */}
            <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/10 pointer-events-none z-0" />

            {/* Vertically Centered Typography & CTA */}
            <div className="relative z-10 max-w-xl">
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-200 mb-3 sm:mb-4 block">
                04 / Custom Product Delivery
              </span>
              <h3 className="font-brand text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.06]">
                From concept to deployment with zero slop
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 font-normal leading-relaxed mb-8 sm:mb-10">
                We work alongside you in rapid iterative sprints. Clean code, automated test suites, transparent progress updates, and dedicated support every step of the journey.
              </p>
              <div>
                <Button
                  asChild
                  className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl cursor-pointer transition-transform hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <Link href="/support">
                    <span>Get a project quote</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section 03: Direct Consultation Module (Cyan / Sky Canvas #38bdf8) */}
      <section id="support" className="w-full px-1.5 sm:px-3 py-2 sm:py-3 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-[#38bdf8] text-zinc-950 px-6 sm:px-12 lg:px-16 py-16 sm:py-24 lg:py-28 shadow-2xl text-center">
          {/* Split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/5 pointer-events-none z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-950/70 font-normal mb-4 sm:mb-6">
              DIRECT ENGINEER-TO-CLIENT COLLABORATION
            </p>
            <h2 className="font-brand text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-950 mb-6 sm:mb-8 leading-[1.05]">
              Turning ideas into reality
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-950/85 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
              No middle managers or bureaucratic delays. You collaborate directly with experienced builders who design, code, and deploy your project with precision.
            </p>
            <p className="text-base sm:text-lg font-medium text-zinc-950 mb-4">
              Have an idea or need an engineering team?
            </p>
            <div>
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-10 text-base font-semibold border-0 bg-zinc-950 text-white hover:bg-black shadow-xl cursor-pointer transition-transform hover:scale-105"
              >
                <Link href="/support">Let&apos;s talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section 04: FAQ & Platform Links Directory */}
      <section id="faq" className="w-full px-1.5 sm:px-3 py-2 sm:py-3 bg-zinc-950">
        <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-stretch">
          {/* Left Column: FAQ Accordion Module */}
          <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-4 block">
                03 / Frequently Asked Questions
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.08]">
                Answers to common questions
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-8">
                Everything you need to know about our engineering process, pricing tiers, and delivery standards.
              </p>
              <div>
                <FAQAccordion faqs={LANDING_FAQS} />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 mt-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/support"
                className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold bg-zinc-800 hover:bg-zinc-700 text-white inline-flex items-center justify-center transition-colors shadow-md min-w-40 sm:min-w-48 text-center"
              >
                Hire our team
              </Link>
              <Link
                href="/pricing"
                className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold bg-zinc-800 hover:bg-zinc-700 text-white inline-flex items-center justify-center transition-colors shadow-md min-w-40 sm:min-w-48 text-center"
              >
                View pricing
              </Link>
            </div>
          </div>

          {/* Right Column: Organization Directory Module */}
          <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col justify-between">
            {/* Main Links Groups with Clean Dividers */}
            <div className="flex flex-col my-auto">
              {/* Group 1: SERVICES */}
              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    SERVICES
                  </span>
                </div>
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link href="#services" className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors">
                    Frontend Engineering
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link href="#services" className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors">
                    Backend Architecture
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link href="#services" className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors">
                    API Integrations
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link href="/pricing" className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors">
                    Pricing &amp; Packages
                  </Link>
                </div>
              </div>

              {/* Group 2: ORGANIZATION */}
              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center mt-3 sm:mt-5">
                <div className="col-span-4 sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    COMPANY
                  </span>
                </div>
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link href="#work" className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors">
                    Selected Projects
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link href="#team" className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors">
                    The DevEleven Team
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link href="/support" className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors text-right cursor-pointer">
                    Contact / Inquiries
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link href="/privacy" className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors">
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link href="/terms" className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>

              {/* Bottom line enclosing the links block */}
              <div className="border-t border-white/10" />
            </div>

            {/* Bottom Row: Social Icon Buttons */}
            <div className="pt-6 sm:pt-8 flex items-center justify-end gap-3 sm:gap-4">
              <a
                href="https://github.com/DEVELEVEN-io"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="size-12 sm:size-14 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-sky-400 flex items-center justify-center transition-colors shadow-md shrink-0"
              >
                <FaGithub className="size-5 sm:size-6" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="size-12 sm:size-14 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-sky-400 flex items-center justify-center transition-colors shadow-md shrink-0"
              >
                <FaXTwitter className="size-5 sm:size-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="size-12 sm:size-14 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-sky-400 flex items-center justify-center transition-colors shadow-md shrink-0"
              >
                <FaYoutube className="size-5 sm:size-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="size-12 sm:size-14 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-sky-400 flex items-center justify-center transition-colors shadow-md shrink-0"
              >
                <FaLinkedinIn className="size-5 sm:size-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section: Pre-Footer CTA Canvas */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 pb-8 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-[#0284c7] text-white p-10 sm:p-16 lg:p-20 shadow-2xl text-center">
          {/* Split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/10 pointer-events-none z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-sky-200 font-normal mb-4">
              READY TO TURN YOUR IDEA INTO REALITY?
            </p>
            <h2 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.08] text-white">
              Let&apos;s build your next digital product
            </h2>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
              Whether you need a high-converting marketing website, a custom SaaS web app, or dedicated backend engineering, DevEleven delivers clean results on time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-lg font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56"
              >
                <Link href="/support" className="flex items-center justify-center gap-2.5">
                  <TrendingUp className="size-5 text-zinc-950 shrink-0" strokeWidth={2.5} />
                  <span>Start a project</span>
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-lg font-medium border-0 bg-zinc-950 text-white hover:bg-black shadow-xl cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56"
              >
                <Link href="/pricing" className="flex items-center justify-center gap-2.5">
                  <Sparkles className="size-5 text-sky-400 shrink-0" strokeWidth={2.5} />
                  <span>Explore pricing</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer Section */}
      <Footer />
    </div>
  );
}
