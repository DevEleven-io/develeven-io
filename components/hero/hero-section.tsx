"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  type HeroSlide,
  SOLFLARE_HERO_SLIDES,
} from "@/lib/constants/hero-slides";
import { HeroCardsDeck } from "@/components/hero/hero-cards-deck";

export interface HeroSectionProps {
  mode?: "scroll" | "auto";
  slides?: HeroSlide[];
  autoIntervalMs?: number;
  leftActions?: (props: {
    activeSlide: HeroSlide;
    activeIndex: number;
  }) => React.ReactNode;
  rightContent?: (props: {
    activeSlide: HeroSlide;
    activeIndex: number;
    goToSlide: (index: number) => void;
  }) => React.ReactNode;
  showPillRail?: boolean;
  className?: string;
}

export function HeroSection({
  mode = "scroll",
  slides = SOLFLARE_HERO_SLIDES,
  autoIntervalMs = 5000,
  leftActions,
  rightContent,
  showPillRail = true,
  className,
}: HeroSectionProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const activeSlideIndexRef = useRef<number>(0);
  const heroTrackRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // User manual interaction listeners to release programmatic scroll lock
  useEffect(() => {
    if (mode !== "scroll") return;

    const releaseLock = () => {
      if (isProgrammaticScrollRef.current) {
        isProgrammaticScrollRef.current = false;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      }
    };

    window.addEventListener("wheel", releaseLock, { passive: true });
    window.addEventListener("touchstart", releaseLock, { passive: true });
    window.addEventListener("scrollend", releaseLock, { passive: true });

    return () => {
      window.removeEventListener("wheel", releaseLock);
      window.removeEventListener("touchstart", releaseLock);
      window.removeEventListener("scrollend", releaseLock);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [mode]);

  // Scroll tracking (only active when mode === "scroll")
  const { scrollYProgress } = useScroll(
    mode === "scroll"
      ? {
          target: heroTrackRef,
          offset: ["start start", "end end"],
        }
      : {},
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (mode !== "scroll") return;
    // Suppress intermediate state thrashing during smooth tab scrolling
    if (isProgrammaticScrollRef.current) return;

    let newIndex = 0;
    if (latest >= 0.6) {
      newIndex = 2;
    } else if (latest >= 0.3) {
      newIndex = 1;
    }

    if (newIndex !== activeSlideIndexRef.current) {
      activeSlideIndexRef.current = newIndex;
      setActiveSlideIndex(newIndex);
    }
  });

  // Automatic rotation (only active when mode === "auto")
  useEffect(() => {
    if (mode !== "auto") return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => {
        const next = (prev + 1) % slides.length;
        activeSlideIndexRef.current = next;
        return next;
      });
    }, autoIntervalMs);

    return () => clearInterval(interval);
  }, [mode, slides.length, autoIntervalMs]);

  const handleTabClick = (index: number) => {
    activeSlideIndexRef.current = index;
    setActiveSlideIndex(index);

    if (mode === "scroll") {
      if (!heroTrackRef.current) return;
      const rect = heroTrackRef.current.getBoundingClientRect();
      const maxScroll = rect.height - window.innerHeight;
      if (maxScroll <= 0) return;

      const targetProgress = index === 0 ? 0.05 : index === 1 ? 0.45 : 0.80;
      const trackTopInDocument = window.scrollY + rect.top;
      const targetScrollY = trackTopInDocument + maxScroll * targetProgress;

      isProgrammaticScrollRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });

      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 700);
    }
  };

  const currentSlide = slides[activeSlideIndex] ?? slides[0];

  const contentInner = (
    <>
      {/* Solflare Two-Tone Vertical Split Overlay (Right Half Dark Tint Overlay) */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/10 pointer-events-none z-0" />

      {/* Grid Content Container */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          {/* Left Column: Eyebrow, Scaled Headline, Lead Subtitle (Fading) & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="relative z-10 w-full">
              <div className="relative">
                {slides.map((slide, i) => {
                  const isActive = activeSlideIndex === i;
                  const isPast = i < activeSlideIndex;

                  return (
                    <motion.div
                      key={slide.id}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : isPast ? -20 : 20,
                        scale: isActive ? 1 : 0.98,
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ willChange: "transform, opacity" }}
                      className={cn(
                        "flex flex-col justify-start",
                        isActive
                          ? "relative z-10 pointer-events-auto"
                          : "absolute inset-0 z-0 pointer-events-none",
                      )}
                    >
                      {/* Monospace Eyebrow Label (matching Architecture column) */}
                      <span
                        className={cn(
                          "font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4 block",
                          slide.isLightSlide
                            ? "text-zinc-950/70"
                            : "text-pink-200",
                        )}
                      >
                        {slide.eyebrow}
                      </span>

                      {/* Scaled Headline (matching Architecture leading, weight, and mb-4 sm:mb-6) */}
                      <h1
                        className={cn(
                          "font-brand text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.06] mb-4 sm:mb-6",
                          slide.isLightSlide ? "text-zinc-950" : "text-white",
                        )}
                      >
                        {slide.heading}
                      </h1>

                      {/* Scaled Subtitle (matching Architecture font weight, color, leading, and mb-8 sm:mb-10) */}
                      <p
                        className={cn(
                          "text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl",
                          slide.isLightSlide
                            ? "text-zinc-900/80"
                            : "text-white/80",
                        )}
                      >
                        {slide.body}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Actions Slot (Left Column Bottom) */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 z-20">
              {leftActions ? (
                leftActions({
                  activeSlide: currentSlide,
                  activeIndex: activeSlideIndex,
                })
              ) : (
                <>
                  <Button
                    asChild
                    className={cn(
                      "h-12 sm:h-14 rounded-full px-7 sm:px-9 text-base sm:text-lg font-semibold border-0 shadow-xl cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56",
                      currentSlide.isLightSlide
                        ? "bg-zinc-950 text-white hover:bg-black"
                        : "bg-white text-zinc-950 hover:bg-zinc-100",
                    )}
                  >
                    <Link href="/support" className="flex items-center justify-center gap-2.5 sm:gap-3">
                      <TrendingUp
                        className={cn(
                          "size-5 shrink-0",
                          currentSlide.isLightSlide ? "text-white" : "text-zinc-950",
                        )}
                        strokeWidth={2.5}
                      />
                      <span>Hire Us</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className={cn(
                      "h-12 sm:h-14 rounded-full px-7 sm:px-9 text-base sm:text-lg font-medium border-0 shadow-lg cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56 backdrop-blur-sm",
                      currentSlide.isLightSlide
                        ? "bg-white/90 text-zinc-950 hover:bg-white"
                        : "bg-zinc-950 text-white hover:bg-black",
                    )}
                  >
                    <Link href="#services" className="flex items-center justify-center gap-2.5 sm:gap-3">
                      <Sparkles
                        className={cn(
                          "size-5 shrink-0",
                          currentSlide.isLightSlide ? "text-zinc-950" : "text-pink-300",
                        )}
                        strokeWidth={2.5}
                      />
                      <span>Our Services</span>
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

          {/* Right Column: Custom Content (e.g. Cards Deck or Login Form) & Vertical Navigation Pill Rail */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end gap-10 sm:gap-14 lg:gap-16 xl:gap-20">
            {rightContent ? (
              rightContent({
                activeSlide: currentSlide,
                activeIndex: activeSlideIndex,
                goToSlide: handleTabClick,
              })
            ) : (
              <HeroCardsDeck
                slides={slides}
                activeSlideIndex={activeSlideIndex}
                onSelectSlide={handleTabClick}
              />
            )}

            {/* Connected Vertical Navigation Pill Rail (01 / 02 / 03) */}
            {showPillRail && (
              <div className="relative flex flex-col items-center justify-center gap-4 select-none shrink-0">
                {/* Vertical connecting line */}
                <div
                  className={cn(
                    "w-0.5 absolute top-4 bottom-4 left-1/2 -translate-x-1/2 z-0 transition-colors duration-500",
                    currentSlide.isLightSlide ? "bg-black/25" : "bg-white/35",
                  )}
                />

                {slides.map((slide, index) => {
                  const isActive = activeSlideIndex === index;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => handleTabClick(index)}
                      className={cn(
                        "relative z-10 w-12 h-12 rounded-xl flex items-center justify-center font-semibold text-sm shadow-md transition-all duration-300 cursor-pointer select-none",
                        isActive
                          ? "bg-black text-white shadow-xl scale-105"
                          : "bg-white text-zinc-950 hover:bg-zinc-100 shadow-sm",
                      )}
                      aria-label={`Go to slide 0${index + 1}`}
                    >
                      <span>0{index + 1}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  if (mode === "scroll") {
    return (
      <section
        ref={heroTrackRef}
        className={cn(
          "relative h-[200vh] w-full bg-zinc-950",
          className,
        )}
      >
        <div className="sticky top-16 sm:top-20 h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] w-full flex flex-col justify-start px-1.5 sm:px-3 pb-1.5 sm:pb-3 pt-0">
          <div
            className="relative w-full h-full max-w-screen-2xl mx-auto rounded-4xl sm:rounded-5xl overflow-hidden flex items-center justify-center transition-colors duration-500 shadow-2xl"
            style={{ backgroundColor: currentSlide.bgColor }}
          >
            {contentInner}
          </div>
        </div>
      </section>
    );
  }

  // Automatic mode (e.g. Login page)
  return (
    <section
      className={cn(
        "relative w-full h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] shrink-0 flex flex-col justify-start px-1.5 sm:px-3 pb-1.5 sm:pb-3 pt-0 bg-zinc-950",
        className,
      )}
    >
      <div
        className="relative w-full h-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden flex items-center justify-center transition-colors duration-500 shadow-2xl"
        style={{ backgroundColor: currentSlide.bgColor }}
      >
        {contentInner}
      </div>
    </section>
  );
}
