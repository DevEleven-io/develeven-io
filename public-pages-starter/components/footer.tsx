"use client";

import { Code2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-white pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 border-t border-white/10 relative z-10">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Section: Brand Info & Clean Directory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <Link
              href="/"
              className="group flex items-center gap-3 font-bold tracking-tight text-white transition-opacity hover:opacity-90 w-fit mb-5"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-zinc-950 font-bold shadow-md transition-transform group-hover:scale-105">
                <Code2 className="size-5 text-zinc-950" strokeWidth={2.5} />
              </span>
              <span className="text-2xl font-brand font-bold tracking-tight text-white">
                DevEleven
              </span>
            </Link>

            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium mb-3">
              TURNING IDEAS INTO REALITY &middot; EST. 2024
            </p>

            <p className="text-zinc-400 max-w-md text-sm sm:text-base font-normal leading-relaxed">
              We build elegant websites, robust backend systems, and modern digital applications at affordable prices.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            {/* Column 1: Services */}
            <div>
              <h4 className="mb-5 text-xs font-mono uppercase tracking-widest text-zinc-400 font-medium">
                SERVICES
              </h4>
              <ul className="flex flex-col gap-3.5 text-sm sm:text-base font-normal">
                <li>
                  <Link href="#services" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>Frontend Development</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>Backend &amp; Cloud</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>API Architecture</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>Custom Solutions</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Organization */}
            <div>
              <h4 className="mb-5 text-xs font-mono uppercase tracking-widest text-zinc-400 font-medium">
                ORGANIZATION
              </h4>
              <ul className="flex flex-col gap-3.5 text-sm sm:text-base font-normal">
                <li>
                  <Link href="#work" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>Our Projects</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>Core Team</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
                <li>
                  <Link href="#tech" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>Technologies</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>Pricing Plans</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Connect & Legal */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-5 text-xs font-mono uppercase tracking-widest text-zinc-400 font-medium">
                CONNECT &amp; LEGAL
              </h4>
              <ul className="flex flex-col gap-3.5 text-sm sm:text-base font-normal">
                <li>
                  <Link href="/support" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>Contact / Quote</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/DEVELEVEN-io" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>GitHub Organization</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>Privacy Policy</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    <span>Terms of Service</span>
                    <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large Typography Brand Slogan Banner */}
        <div className="py-10 sm:py-14 border-y border-white/10 my-8 sm:my-12 flex flex-col md:flex-row md:items-end justify-between gap-6 overflow-hidden">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium mb-3 block">
              MODERN ENGINEERING &middot; CLEAN ARCHITECTURE
            </span>
            <h2 className="font-brand font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase select-none leading-none">
              TURNING IDEAS INTO REALITY.
            </h2>
          </div>

          <div className="text-left md:text-right">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block mb-1">
              PROVEN RESULTS
            </span>
            <span className="font-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-400">
              50+ PROJECTS SHIPPED
            </span>
          </div>
        </div>

        {/* Bottom Legal, Copyright & Organization Info */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-zinc-400 font-normal">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <p className="font-mono uppercase tracking-wider text-zinc-400">
              &copy; {new Date().getFullYear()} DevEleven. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/support" className="hover:text-white transition-colors">
                Contact
              </Link>
              <a href="https://github.com/DEVELEVEN-io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>

          <p className="max-w-xl text-zinc-400 leading-relaxed md:text-right">
            DevEleven is a specialized software engineering organization building scalable web applications, robust APIs, and bespoke design systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
