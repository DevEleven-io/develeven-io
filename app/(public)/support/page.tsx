"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQAccordion, type FAQ } from "@/components/faq-accordion";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";
import {
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

const ISSUE_CATEGORIES = [
  { value: "quote", label: "New Project Quote" },
  { value: "frontend", label: "Frontend & Web Design" },
  { value: "backend", label: "Backend & API Architecture" },
  { value: "consulting", label: "Technical Consultation" },
  { value: "other", label: "General Question" },
];

const SUPPORT_FAQS: FAQ[] = [
  {
    question: "How quickly will DevEleven respond to project requests?",
    answer:
      "Most inquiries receive a direct response from our lead engineers within 24 hours. We evaluate your requirements and schedule an introductory technical call.",
  },
  {
    question: "Can you provide a fixed-price quotation for our project?",
    answer:
      "Yes. Once we review your functional specs or design wireframes, we provide a transparent, fixed-price quote and timeline with zero hidden surprise charges.",
  },
  {
    question: "Do you sign non-disclosure agreements (NDAs)?",
    answer:
      "Absolutely. We are happy to review and sign mutual NDAs before you share proprietary product documentation, repositories, or technical architecture plans.",
  },
  {
    question: "What timezone does your team operate in?",
    answer:
      "Our team accommodates global clients across North America, Europe, and Asia-Pacific with overlapping communication hours via Slack, Discord, or email.",
  },
];

export default function SupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("quote");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicketId, setSubmittedTicketId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate local reference code and simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      const refId = `DE-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedTicketId(refId);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setCategory("quote");
    }, 1000);
  };

  return (
    <div className="flex flex-col bg-zinc-950 text-foreground min-h-screen">
      {/* 1. Hero Canvas (Cyan / Sky Accent #38bdf8) */}
      <section className="w-full px-1.5 sm:px-3 pt-2 sm:pt-3 pb-2 sm:pb-3 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-4xl sm:rounded-5xl overflow-hidden bg-brand-primary text-zinc-950 px-6 sm:px-12 lg:px-16 py-16 sm:py-24 shadow-2xl text-center">
          {/* Two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/5 pointer-events-none z-0" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/70 mb-3 sm:mb-4 block">
              Contact &amp; Project Inquiries
            </span>

            <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-950 mb-6 leading-[1.05]">
              Let&apos;s build together
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-950/85 font-normal leading-relaxed max-w-2xl mx-auto">
              Ready to turn your idea into reality? Submit a project request or question. Our core engineering team reviews and responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Ticket Form & Direct Channels Grid */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 bg-zinc-950">
        <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 items-stretch">
          {/* Left Column (7 cols): Contact / Quote Form */}
          <div className="lg:col-span-7 relative rounded-4xl sm:rounded-5xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col justify-between">
            {/* Split overlay */}
            <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-white/[0.02] pointer-events-none z-0" />

            <div className="relative z-10">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                01 / Project Request
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2 leading-[1.08]">
                Get in touch with DevEleven
              </h2>
              <p className="text-base text-zinc-400 font-normal leading-relaxed mb-8">
                Tell us about your project requirements, goals, or timeline.
              </p>

              {/* Success Message Banner */}
              {submittedTicketId ? (
                <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-6 sm:p-8 flex flex-col items-center text-center gap-4 my-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-sky-500 text-zinc-950">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-brand font-bold text-xl sm:text-2xl text-white mb-1">
                      Message Received!
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md">
                      Your inquiry has been logged with reference ID:
                    </p>
                    <p className="font-mono font-bold text-lg text-sky-400 my-2">
                      #{submittedTicketId}
                    </p>
                    <p className="text-xs text-zinc-400 mt-2">
                      A senior engineer will review your message and reply via email within 24 hours.
                    </p>
                  </div>
                  <Button
                    onClick={() => setSubmittedTicketId(null)}
                    variant="outline"
                    className="mt-2 h-11 rounded-full px-6 text-sm border-white/20 text-white hover:bg-white/10"
                  >
                    <RotateCcw className="size-4 mr-2" />
                    Submit another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="support-name" className="text-xs font-semibold text-zinc-400">
                        Your Name
                      </label>
                      <Input
                        id="support-name"
                        type="text"
                        placeholder="Alex Morgan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-12 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder:text-zinc-600 focus-visible:border-white/30 focus-visible:ring-1 focus-visible:ring-white/20 text-sm px-4 outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="support-email" className="text-xs font-semibold text-zinc-400">
                        Email Address
                      </label>
                      <Input
                        id="support-email"
                        type="email"
                        placeholder="alex@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder:text-zinc-600 focus-visible:border-white/30 focus-visible:ring-1 focus-visible:ring-white/20 text-sm px-4 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Category & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="support-category" className="text-xs font-semibold text-zinc-400">
                        Inquiry Type
                      </label>
                      <Select
                        value={category}
                        onValueChange={(val) => {
                          if (val) setCategory(val);
                        }}
                      >
                        <SelectTrigger
                          id="support-category"
                          className="h-12 w-full rounded-xl bg-zinc-900 border border-white/10 text-white placeholder:text-zinc-600 focus-visible:border-white/30 focus-visible:ring-1 focus-visible:ring-white/20 text-sm px-4 font-normal cursor-pointer hover:border-white/20 transition-colors outline-none"
                        >
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>

                        <SelectContent
                          side="bottom"
                          align="start"
                          sideOffset={6}
                          className="w-(--anchor-width) rounded-xl bg-zinc-900 border border-white/10 text-white shadow-2xl p-1"
                        >
                          {ISSUE_CATEGORIES.map((cat) => (
                            <SelectItem
                              key={cat.value}
                              value={cat.value}
                              label={cat.label}
                            >
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="support-subject" className="text-xs font-semibold text-zinc-400">
                        Project / Topic
                      </label>
                      <Input
                        id="support-subject"
                        type="text"
                        placeholder="e.g. Next.js SaaS MVP"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="h-12 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder:text-zinc-600 focus-visible:border-white/30 focus-visible:ring-1 focus-visible:ring-white/20 text-sm px-4 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="support-message" className="text-xs font-semibold text-zinc-400">
                      Project Details
                    </label>
                    <textarea
                      id="support-message"
                      rows={5}
                      placeholder="Tell us about the scope, features, design references, and any target deadlines..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full rounded-2xl bg-zinc-900 border border-white/10 text-white placeholder:text-zinc-600 p-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 resize-none leading-relaxed transition-colors"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold bg-primary text-zinc-950 hover:bg-sky-300 shadow-xl cursor-pointer transition-transform hover:scale-105 border-0 w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="size-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                          <span>Sending inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send project message</span>
                          <ArrowRight className="size-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column (5 cols): Direct Channels & Info */}
          <div className="lg:col-span-5 relative rounded-4xl sm:rounded-5xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col my-auto">
              {/* Group 1: CHANNELS */}
              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    DIRECT EMAIL
                  </span>
                </div>
                <div className="col-span-8 sm:col-span-9 text-right">
                  <a
                    href="mailto:contact@develeven.io"
                    className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    contact@develeven.io
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    GITHUB
                  </span>
                </div>
                <div className="col-span-8 sm:col-span-9 text-right">
                  <a
                    href="https://github.com/DEVELEVEN-io"
                    target="_blank"
                    rel="noreferrer"
                    className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    @DEVELEVEN-io
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    RESPONSE
                  </span>
                </div>
                <div className="col-span-8 sm:col-span-9 text-right">
                  <span className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white">
                    Under 24 hours
                  </span>
                </div>
              </div>

              {/* Group 2: TEAM */}
              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center mt-3 sm:mt-5">
                <div className="col-span-4 sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    ENGINEERING
                  </span>
                </div>
                <div className="col-span-8 sm:col-span-9 text-right">
                  <span className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white">
                    Senior Full-Stack Team
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center">
                <div className="col-span-4 sm:col-span-3" />
                <div className="col-span-8 sm:col-span-9 text-right">
                  <Link
                    href="/#services"
                    className="font-brand text-base sm:text-lg lg:text-xl font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    Explore our stack
                  </Link>
                </div>
              </div>

              {/* Group 3: LEGAL */}
              <div className="border-t border-white/10 grid grid-cols-12 py-3 sm:py-3.5 items-center mt-3 sm:mt-5">
                <div className="col-span-4 sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    LEGAL
                  </span>
                </div>
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

              <div className="border-t border-white/10" />
            </div>

            {/* Social Icons */}
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

      {/* 3. Section: FAQ Accordion */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 pb-8 bg-zinc-950">
        <div className="w-full max-w-screen-2xl mx-auto rounded-4xl sm:rounded-5xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
              02 / Common Inquiries
            </span>
            <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.08]">
              Frequently asked questions
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
              Have questions before kicking off a project? Here are answers to common questions about our engagement terms, sprint timelines, and code ownership.
            </p>
          </div>

          <div className="max-w-4xl">
            <FAQAccordion faqs={SUPPORT_FAQS} />
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
