"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Team", href: "/team" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/support" },
];

import { useConvexAuth } from "convex/react";

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const pathname = usePathname();

  const [sheetOpen, setSheetOpen] = useState(false);
  const [isInsideHero, setIsInsideHero] = useState(pathname === "/");
  const [isVisible, setIsVisible] = useState(true);

  // Dropdown states
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY;

      if (pathname === "/") {
        const heroThreshold = window.innerHeight * 0.9;
        const insideHero = currentScrollY <= heroThreshold;
        setIsInsideHero(insideHero);

        if (insideHero) {
          setIsVisible(true);
        } else {
          if (scrollDiff > 6) {
            setIsVisible(false); // Hide on scroll down
          } else if (scrollDiff < -4) {
            setIsVisible(true); // Show on scroll up immediately
          }
        }
      } else {
        setIsInsideHero(false);
        if (currentScrollY <= 10) {
          setIsVisible(true);
        } else if (scrollDiff > 6) {
          setIsVisible(false);
        } else if (scrollDiff < -4) {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle click outside contact dropdown
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#contact-nav-item")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dropdownOpen]);

  return (
    <>
      {/* Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full h-16 sm:h-20 transition-transform duration-300 ease-in-out px-1.5 sm:px-3 pointer-events-none",
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0",
        )}
      >
        <div className="relative w-full max-w-screen-2xl mx-auto h-full">
          <div
            onMouseLeave={() => setDropdownOpen(false)}
            className={cn(
              "absolute top-0 left-0 right-0 flex w-full items-start justify-between px-3 sm:px-4 py-2 sm:py-3 bg-zinc-950 text-white rounded-b-2xl sm:rounded-b-3xl shadow-xl transition-[height] duration-300 ease-in-out overflow-hidden",
              isVisible ? "pointer-events-auto" : "pointer-events-none",
              dropdownOpen ? "h-[255px] sm:h-[275px]" : "h-16 sm:h-20",
            )}
          >
          {/* Logo */}
          <Link
            href="/"
            onMouseEnter={() => setDropdownOpen(false)}
            className="group flex items-center gap-3 font-bold tracking-tight transition-opacity hover:opacity-90 h-12 sm:h-14 shrink-0"
          >
            <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black transition-transform group-hover:scale-105 shadow-md shrink-0">
              <Code2 className="size-7 sm:size-8 text-zinc-950" strokeWidth={2.5} />
            </span>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-brand">
              DevEleven
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden items-start gap-1 sm:gap-1.5 md:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) =>
              item.label === "Contact" ? (
                <div
                  id="contact-nav-item"
                  key={item.label}
                  className="relative flex flex-col items-start"
                  onMouseEnter={() => setDropdownOpen(true)}
                >
                  <button
                    id="contact-dropdown-trigger"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex h-12 sm:h-14 items-center gap-2 rounded-2xl px-4 sm:px-5 font-semibold transition-colors duration-200 text-sm sm:text-base cursor-pointer text-white hover:text-zinc-400"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-300",
                        dropdownOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Submenu options inside expanded navbar */}
                  <div
                    className={cn(
                      "flex flex-col gap-2.5 pt-2 sm:pt-3 pb-3 px-4 sm:px-5 whitespace-nowrap transition-all duration-300 ease-in-out",
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none",
                    )}
                  >
                    <a
                      href="mailto:contact@develeven.io"
                      className="text-sm sm:text-base font-semibold text-white hover:text-zinc-400 transition-colors duration-200 cursor-pointer text-left"
                    >
                      contact@develeven.io
                    </a>
                    <a
                      href="https://github.com/DEVELEVEN-io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-zinc-400 transition-colors duration-200 cursor-pointer text-left"
                    >
                      GitHub @DEVELEVEN-io
                    </a>
                    <Link
                      href="/support"
                      onClick={() => setDropdownOpen(false)}
                      className="text-sm sm:text-base font-semibold text-white hover:text-zinc-400 transition-colors duration-200 cursor-pointer text-left"
                    >
                      Request a Project Quote
                    </Link>
                    <Link
                      href="/terms"
                      onClick={() => setDropdownOpen(false)}
                      className="text-sm sm:text-base font-semibold text-white hover:text-zinc-400 transition-colors duration-200 cursor-pointer text-left"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      href="/privacy"
                      onClick={() => setDropdownOpen(false)}
                      className="text-sm sm:text-base font-semibold text-white hover:text-zinc-400 transition-colors duration-200 cursor-pointer text-left"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setDropdownOpen(false)}
                  className="flex h-12 sm:h-14 items-center justify-center rounded-2xl px-4 sm:px-5 text-sm sm:text-base font-semibold text-white hover:text-zinc-400 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Action Buttons */}
          <div
            onMouseEnter={() => setDropdownOpen(false)}
            className="hidden items-center gap-2.5 sm:gap-3 md:flex h-12 sm:h-14"
          >
            {isLoading ? (
              <div className="h-12 sm:h-14 w-36 rounded-full bg-zinc-800 animate-pulse" />
            ) : isAuthenticated ? (
              <Button
                asChild
                className="h-12 sm:h-14 transition-all duration-200 px-7 sm:px-8 text-sm sm:text-base font-semibold border-0 cursor-pointer rounded-full bg-primary text-primary-foreground hover:bg-sky-300 shadow-md"
              >
                <Link href="/support" className="flex items-center gap-2">
                  Client Portal
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  asChild
                  className="h-12 sm:h-14 font-medium cursor-pointer text-sm sm:text-base transition-all duration-200 px-6 sm:px-7 rounded-full bg-white/10 text-white border-0 hover:bg-white/20 hover:text-white backdrop-blur-md shadow-none"
                >
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button
                  asChild
                  className="h-12 sm:h-14 transition-all duration-200 px-7 sm:px-8 text-sm sm:text-base font-semibold border-0 cursor-pointer rounded-full bg-primary text-primary-foreground hover:bg-sky-300 shadow-md"
                >
                  <Link href="/support" className="flex items-center gap-2">
                    Hire Us!
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Navigation Drawer */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="h-12 w-12 hover:bg-white/10 text-white cursor-pointer rounded-2xl"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between border-0 bg-zinc-950/95 text-white backdrop-blur-md">
              <div>
                <SheetHeader className="mb-8">
                  <SheetTitle className="flex items-center gap-2.5">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Code2 className="size-4 text-zinc-950" strokeWidth={2.5} />
                    </span>
                    <span className="font-bold text-lg text-white font-brand">
                      DevEleven
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav
                  className="flex flex-col gap-2"
                  aria-label="Mobile navigation"
                >
                  {navItems.map((item) =>
                    item.label === "Contact" ? (
                      <div key={item.label} className="flex flex-col">
                        <button
                          onClick={() =>
                            setMobileContactOpen(!mobileContactOpen)
                          }
                          className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-white transition-colors hover:text-zinc-400 cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            {item.label}
                          </span>
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform duration-200 opacity-60",
                              mobileContactOpen && "rotate-180",
                            )}
                          />
                        </button>
                        {mobileContactOpen && (
                          <div className="flex flex-col gap-1 pl-4 py-2 animate-fade-in">
                            <a
                              href="mailto:contact@develeven.io"
                              className="px-3 py-2 text-base font-semibold text-white hover:text-zinc-400 transition-colors"
                            >
                              contact@develeven.io
                            </a>
                            <a
                              href="https://github.com/DEVELEVEN-io"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 text-base font-semibold text-white hover:text-zinc-400 transition-colors"
                            >
                              GitHub @DEVELEVEN-io
                            </a>
                            <Link
                              href="/support"
                              onClick={() => setSheetOpen(false)}
                              className="px-3 py-2 text-base font-semibold text-white hover:text-zinc-400 transition-colors"
                            >
                              Request a Quote
                            </Link>
                            <Link
                              href="/terms"
                              onClick={() => setSheetOpen(false)}
                              className="px-3 py-2 text-base font-semibold text-white hover:text-zinc-400 transition-colors"
                            >
                              Terms of Service
                            </Link>
                            <Link
                              href="/privacy"
                              onClick={() => setSheetOpen(false)}
                              className="px-3 py-2 text-base font-semibold text-white hover:text-zinc-400 transition-colors"
                            >
                              Privacy Policy
                            </Link>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setSheetOpen(false)}
                        className="rounded-lg px-4 py-3 text-base font-semibold text-white transition-colors hover:text-zinc-400"
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                </nav>
              </div>

              {/* Mobile Drawer Actions */}
              <div className="flex flex-col gap-3 pb-4">
                <Button
                  variant="outline"
                  asChild
                  className="h-12 w-full font-medium text-base rounded-full bg-white/10 text-white border-0 hover:bg-white/20 hover:text-white"
                >
                  <Link href="/signin" onClick={() => setSheetOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button
                  asChild
                  className="h-12 w-full text-base font-semibold rounded-full bg-primary text-primary-foreground hover:bg-sky-300 border-0"
                >
                  <Link href="/support" onClick={() => setSheetOpen(false)}>
                    Hire Us!
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </header>
    </>
  );
}
