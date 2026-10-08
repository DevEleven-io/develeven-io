import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { TEAM_MEMBERS } from "@/lib/constants/team-members";
import { Globe, ArrowRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaTelegram,
  FaFacebookF,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Team | DevEleven — Core Software Architects & Engineers",
  description:
    "Meet the engineering collective behind DevEleven. Full-stack architects, backend engineers, and UI specialists building high-performance modern web platforms.",
};

const CULTURE_PILLARS = [
  {
    number: "01",
    title: "Direct Engineer Collaboration",
    description:
      "Work directly with the architects writing your codebase. Zero account managers playing telephone, no bloated agency overhead. Fast, direct technical dialogue from day one.",
  },
  {
    number: "02",
    title: "Zero-Slop Engineering Standards",
    description:
      "Strict TypeScript typing, modular architectures, automated testing, and comprehensive documentation. We deliver 100% clean code ownership with zero technical debt.",
  },
  {
    number: "03",
    title: "Rapid Iterative Sprints",
    description:
      "Production-ready features shipped in 1–4 week sprints with continuous CI/CD previews. See real, deployable code every week for tight feedback loops and accelerated velocity.",
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col bg-zinc-950 text-foreground min-h-screen">

      {/* 2. Team Members Showcase (Two Screen-Height Rows Inspried by Homepage Services Showcase) */}
      <section id="members" className="w-full px-1.5 sm:px-3 py-4 sm:py-6 bg-zinc-950">
        {/* Centered Section Header */}
        <div className="w-full max-w-screen-2xl mx-auto mb-8 sm:mb-12 text-center pt-8 sm:pt-14 px-4">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-semibold mb-3 block">
            01 / The Architects
          </span>
          <h2 className="font-brand text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.06]">
            Meet our core engineering team
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">
            The builders crafting the foundation, user experience, and cloud pipelines behind DevEleven client solutions.
          </p>
        </div>

        {/* Two Screen-Height Rows (Row 1: 01 & 02, Row 2: 03 & 04) */}
        {[TEAM_MEMBERS.slice(0, 2), TEAM_MEMBERS.slice(2, 4)].map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3 items-stretch"
          >
            {row.map((member) => (
              <div
                key={member.id}
                className="relative rounded-4xl sm:rounded-5xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-12 lg:p-14 xl:p-18 shadow-2xl flex flex-col justify-between text-left group hover:-translate-y-1 transition-all duration-300 min-h-[540px] lg:min-h-0"
              >
                {/* Top: Monospace Index & Role + Refined Display Name */}
                <div>
                  <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-3 sm:mb-4 block">
                    {member.number} / {member.role}
                  </span>
                  <h3 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2 leading-[1.06]">
                    {member.name}
                  </h3>
                </div>

                {/* Middle: Architectural Portrait + Bio & Tags */}
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-6 xl:gap-10 items-start my-auto py-6 sm:py-8">
                  {/* Large Portrait Photo */}
                  <div className="relative w-44 sm:w-52 lg:w-48 xl:w-56 aspect-[4/5] rounded-2xl sm:rounded-4xl overflow-hidden shrink-0 bg-zinc-800 ring-1 ring-white/10 shadow-2xl transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 224px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 text-xs font-mono text-white/90">
                      <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-sm border border-white/10">
                        {member.number}
                      </span>
                    </div>
                  </div>

                  {/* Craft Bio & Core Competencies */}
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <p className="text-zinc-400 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-6 sm:mt-8">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono font-semibold text-zinc-400 bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom: Substantial Action Button & Social Icon Channels */}
                <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mt-auto">
                  {member.links.website ? (
                    <Button
                      asChild
                      className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-200 shadow-xl cursor-pointer transition-transform hover:scale-105 inline-flex items-center gap-2.5"
                    >
                      <a href={member.links.website} target="_blank" rel="noopener noreferrer">
                        <span>Personal site</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  ) : member.links.github ? (
                    <Button
                      asChild
                      className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-200 shadow-xl cursor-pointer transition-transform hover:scale-105 inline-flex items-center gap-2.5"
                    >
                      <a href={member.links.github} target="_blank" rel="noopener noreferrer">
                        <span>GitHub profile</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  ) : (
                    <span className="font-mono text-xs sm:text-sm text-zinc-500 uppercase tracking-wider">
                      Connect
                    </span>
                  )}

                  <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                    {member.links.website && (
                      <a
                        href={member.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} personal website`}
                        className="size-11 sm:size-12 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                      >
                        <Globe className="size-5" />
                      </a>
                    )}
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub profile`}
                        className="size-11 sm:size-12 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                      >
                        <FaGithub className="size-5" />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn profile`}
                        className="size-11 sm:size-12 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                      >
                        <FaLinkedinIn className="size-5" />
                      </a>
                    )}
                    {member.links.twitter && (
                      <a
                        href={member.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} X / Twitter profile`}
                        className="size-11 sm:size-12 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                      >
                        <FaXTwitter className="size-5" />
                      </a>
                    )}
                    {member.links.youtube && (
                      <a
                        href={member.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} YouTube channel`}
                        className="size-11 sm:size-12 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                      >
                        <FaYoutube className="size-5" />
                      </a>
                    )}
                    {member.links.telegram && (
                      <a
                        href={member.links.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Telegram contact`}
                        className="size-11 sm:size-12 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                      >
                        <FaTelegram className="size-5" />
                      </a>
                    )}
                    {member.links.facebook && (
                      <a
                        href={member.links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Facebook profile`}
                        className="size-11 sm:size-12 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                      >
                        <FaFacebookF className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* 2. Engineering Culture & Standards Canvas */}
      <section className="w-full px-1.5 sm:px-3 py-3 sm:py-4 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-4xl sm:rounded-5xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-14 lg:p-16 xl:p-20 shadow-2xl">
          {/* Two-tone split overlay — matches every other card on the site */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/5 pointer-events-none z-0" />

          <div className="relative z-10 flex flex-col">
            {/* Header */}
            <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-3 sm:mb-4 block">
                02 / Principles &amp; Standards
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.06]">
                How our engineering collective operates
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-normal leading-relaxed">
                We believe exceptional software is engineered by small, high-density teams who own systems end-to-end without organizational friction.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 xl:gap-20 pt-10 sm:pt-14 lg:pt-16 border-t border-white/10">
              {CULTURE_PILLARS.map((pillar) => (
                <div key={pillar.number} className="flex flex-col">
                  <span className="font-mono text-5xl sm:text-6xl lg:text-7xl font-bold text-white/10 mb-6 sm:mb-8 block leading-none select-none">
                    {pillar.number}
                  </span>
                  <h3 className="font-brand text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-[1.06]">
                    {pillar.title}
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA row */}
            <div className="mt-12 sm:mt-16 lg:mt-20 pt-10 sm:pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div className="grid grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
                <div className="flex flex-col">
                  <span className="font-brand text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none mb-1.5">100%</span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400">Code ownership</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-brand text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none mb-1.5">1–4 wks</span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400">Sprint delivery</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-brand text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none mb-1.5">0%</span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400">Hidden fees</span>
                </div>
              </div>
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-200 shadow-xl cursor-pointer transition-transform hover:scale-105 inline-flex items-center gap-2.5 shrink-0"
              >
                <Link href="/support">
                  <span>Start a project</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pre-Footer CTA Canvas (Main Brand Color — var(--brand-primary)) */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 pb-8 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-4xl sm:rounded-5xl overflow-hidden bg-brand-primary text-zinc-950 p-10 sm:p-16 lg:p-20 shadow-2xl text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="font-mono text-xs sm:text-sm tracking-widest text-zinc-950/70 font-normal mb-4 uppercase">
              COLLABORATE WITH US
            </p>
            <h2 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.08] text-zinc-950">
              Ready to work with our core engineering team?
            </h2>
            <p className="text-zinc-900/80 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
              Whether you need to architect a new product from scratch or add senior full-stack capability to an existing platform, we are ready to build.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-lg font-semibold border-0 bg-zinc-950 text-white hover:bg-black shadow-xl cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56"
              >
                <Link href="/support">Request a consultation</Link>
              </Button>
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-lg font-medium border-0 bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56"
              >
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Editorial Footer */}
      <Footer />
    </div>
  );
}
