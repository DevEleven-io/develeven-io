"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Server, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { HeroSlide } from "@/lib/constants/hero-slides";

interface HeroCardsDeckProps {
  slides: HeroSlide[];
  activeSlideIndex: number;
  onSelectSlide?: (index: number) => void;
}

export function HeroCardsDeck({
  slides,
  activeSlideIndex,
  onSelectSlide,
}: HeroCardsDeckProps) {
  return (
    <div className="relative w-full max-w-[325px] sm:max-w-[345px] h-[360px] sm:h-[375px] flex items-center justify-center">
      {slides.map((slide, i) => {
        const offset = i - activeSlideIndex;
        const isActive = offset === 0;

        return (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{
              x: offset === 0 ? "0%" : offset > 0 ? "13%" : "-13%",
              scale: offset === 0 ? 1 : 0.92,
              opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 1 : 0,
              rotateZ: offset === 0 ? 0 : offset > 0 ? 2.5 : -2.5,
              zIndex: offset === 0 ? 20 : 10 - Math.abs(offset),
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => {
              if (!isActive && onSelectSlide) onSelectSlide(i);
            }}
            className={cn(
              "absolute inset-0 w-full h-full rounded-4xl bg-zinc-950/85 backdrop-blur-xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between select-none transition-shadow",
              isActive
                ? "cursor-default pointer-events-auto"
                : "cursor-pointer pointer-events-auto hover:opacity-60",
            )}
          >
            {/* Card 0: Full-Stack Engineering */}
            {i === 0 && (
              <>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-sky-400" />
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-normal">
                      01 / Engineering
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Code2 className="size-4 hover:text-white transition-colors" />
                    <FaGithub className="size-4 hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="my-auto space-y-3">
                  <div>
                    <div className="text-4xl sm:text-5xl font-bold font-brand tracking-tight text-white">
                      50+
                    </div>
                    <p className="text-sm text-zinc-300 leading-snug mt-1 font-normal">
                      Modern web projects delivered across React, Next.js &amp; Cloud
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="text-2xl sm:text-3xl font-bold text-sky-400 font-brand tracking-tight">
                      100%
                    </span>
                    <span className="text-sm text-zinc-300 font-normal">
                      verified client satisfaction
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-2 text-xs text-zinc-300 font-normal min-w-0">
                  <CheckCircle2 className="size-4 text-sky-400 shrink-0" />
                  <span className="truncate">Production-grade performance</span>
                </div>
              </>
            )}

            {/* Card 1: Backend & Cloud APIs */}
            {i === 1 && (
              <>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-brand-accent-3" />
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-normal">
                      02 / Cloud &amp; APIs
                    </span>
                  </div>
                  <Server className="size-4 text-brand-accent-3" />
                </div>

                <div className="my-auto space-y-3">
                  <div>
                    <div className="text-4xl sm:text-5xl font-bold font-brand tracking-tight text-white">
                      &lt; 50ms
                    </div>
                    <p className="text-sm text-zinc-300 leading-snug mt-1 font-normal">
                      High-throughput microservices &amp; database querying
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="text-2xl sm:text-3xl font-bold text-brand-accent-3 font-brand tracking-tight">
                      FastAPI + Node
                    </span>
                    <span className="text-sm text-zinc-300 font-normal">
                      secure authentication &amp; Prisma
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-2 text-xs text-zinc-300 font-normal min-w-0">
                  <CheckCircle2 className="size-4 text-brand-accent-3 shrink-0" />
                  <span className="truncate">Reliable &amp; scalable server architecture</span>
                </div>
              </>
            )}

            {/* Card 2: Custom Product Design */}
            {i === 2 && (
              <>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-pink-300" />
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-normal">
                      03 / Design Systems
                    </span>
                  </div>
                  <Sparkles className="size-4 text-pink-300" />
                </div>

                <div className="my-auto space-y-3">
                  <div>
                    <div className="text-4xl sm:text-5xl font-bold font-brand tracking-tight text-white">
                      0 Slop
                    </div>
                    <p className="text-sm text-zinc-300 leading-snug mt-1 font-normal">
                      Clean aesthetic, open canvases, and accessible typography.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="text-2xl sm:text-3xl font-bold text-pink-300 font-brand tracking-tight">
                      100%
                    </span>
                    <span className="text-sm text-zinc-300 font-normal">
                      responsive across mobile &amp; desktop
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-2 text-xs text-zinc-300 font-normal min-w-0">
                  <CheckCircle2 className="size-4 text-pink-300 shrink-0" />
                  <span className="truncate">Bespoke design tailored to your brand</span>
                </div>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
