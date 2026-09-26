"use client";

import Link from "next/link";
import { FAQAccordion, type FAQ } from "@/components/faq-accordion";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const TERMS_FAQS: FAQ[] = [
  {
    question: "What happens if an earner unstars or unfollows within the 30-day window?",
    answer:
      "DevEleven maintains a 30-day escrow retention shield. If an earner removes their engagement within 30 days of claiming a task, our verification system detects the drop and automatically re-credits the escrowed points back to the creator's campaign balance.",
  },
  {
    question: "Does DevEleven charge cashout or withdrawal fees to earners?",
    answer:
      "No. Earner withdrawals have 0% platform deductions. The points you earn convert directly at $0.01 per point (100 points = $1.00 USD), and net proceeds are delivered directly to your Solana wallet in USDC or USDT without platform commissions.",
  },
  {
    question: "Can I use automated scripts, bots, or multiple accounts to complete tasks?",
    answer:
      "No. Using automated headless scripts, emulator syndicates, click-farms, or creating multiple accounts (sybil behavior) is strictly prohibited. Accounts caught attempting artificial task claims are permanently banned and forfeit all accumulated points.",
  },
  {
    question: "Are cryptocurrency payments made via Solana Pay refundable?",
    answer:
      "Because transactions confirmed on the Solana blockchain are immutable, completed cryptocurrency transfers cannot be reversed. However, campaign budgets can be paused or cancelled at any time, returning any unclaimed points back to your platform balance.",
  },
];

const DIRECTORY_ITEMS = [
  { number: "01", label: "Acceptance of Terms", href: "#acceptance" },
  { number: "02", label: "Protocol & Architecture", href: "#protocol" },
  { number: "03", label: "Eligibility & Accounts", href: "#eligibility" },
  { number: "04", label: "Creator Campaign Rules", href: "#creators" },
  { number: "05", label: "Earner Tasks & Payouts", href: "#earners" },
  { number: "06", label: "Points Utility & Escrow", href: "#points" },
  { number: "07", label: "Solana Pay Subscriptions", href: "#subscriptions" },
  { number: "08", label: "Prohibited Conduct", href: "#prohibited" },
  { number: "09", label: "Suspension & Disputes", href: "#disputes" },
  { number: "10", label: "Disclaimers & Liability", href: "#liability" },
  { number: "11", label: "Governing Law & Contact", href: "#governing" },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col bg-zinc-950 text-foreground min-h-screen">
      {/* 1. Hero Canvas */}
      <section className="w-full px-1.5 sm:px-3 pt-2 sm:pt-3 pb-2 sm:pb-3 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white px-6 sm:px-12 lg:px-16 py-16 sm:py-24 shadow-2xl text-center">
          {/* Solflare two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/10 pointer-events-none z-0" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 sm:mb-4 block">
              Legal Documentation &middot; Effective March 2025
            </span>

            <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
              Terms of Service
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              The rules, rights, and obligations governing participation in DevEleven&apos;s decentralized attention protocol, smart escrow vaults, and micro-task verification network.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-200 shadow-xl cursor-pointer transition-transform hover:scale-105"
              >
                <a href="#acceptance">Read terms</a>
              </Button>
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0 bg-zinc-800 hover:bg-zinc-700 text-white shadow-xl cursor-pointer"
              >
                <Link href="/privacy">Privacy policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Guarantees Module (Solflare Yellow #38bdf8) */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-[#38bdf8] text-zinc-950 px-6 sm:px-12 lg:px-16 py-12 sm:py-16 shadow-2xl">
          {/* Solflare two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/5 pointer-events-none z-0" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center items-center">
            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                0%
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80">
                Cashout fees for earners
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                30 days
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80">
                Retention escrow lock
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                100%
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80">
                Real verified humans
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                Non-custodial
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80">
                Direct wallet settlement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Terms Canvas */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-14 lg:p-20 shadow-2xl">
          {/* Solflare two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/5 pointer-events-none z-0" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Quick Directory Grid */}
            <div className="mb-16 sm:mb-20">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                Directory
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Table of contents
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {DIRECTORY_ITEMS.map((item) => (
                  <div
                    key={item.number}
                    className="border-t border-white/10 py-3 sm:py-3.5 flex items-center justify-between"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                      {item.number}
                    </span>
                    <a
                      href={item.href}
                      className="font-brand text-base sm:text-lg font-bold text-white hover:text-sky-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 01: Acceptance of Terms */}
            <div id="acceptance" className="pt-10 sm:pt-14 border-t border-white/10 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                01 / Agreement
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Acceptance of terms
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User&rdquo;, &ldquo;you&rdquo;) and DevEleven (&ldquo;DevEleven&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing develeven.io, registering an account, publishing campaigns, completing micro-tasks, or initiating transactions, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                </p>
                <p>
                  If you do not agree to these Terms in full, you must not access the platform or use any associated services. These Terms should be read alongside our <Link href="/privacy" className="text-white hover:underline">Privacy Policy</Link>, which explains how we collect and process your personal data.
                </p>
              </div>
            </div>

            {/* Section 02: Protocol & Architecture */}
            <div id="protocol" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                02 / Network Architecture
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Protocol and non-custodial architecture
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  DevEleven provides a software platform facilitating authentic social interaction between content creators and everyday internet users. The network operates under two core architectural principles:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Non-Custodial Architecture:</strong> DevEleven does not act as a custodian, bank, or depository for digital assets. Users connect their own self-custodial wallets (such as Solflare or Phantom). We never hold or request private keys or seed phrases.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Smart Escrow Vaults:</strong> When creators launch campaigns, the allocated points budget is locked in automated escrow vaults. Funds are released exclusively upon cryptographic or read-only API verification that genuine human engagement has occurred.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 03: Eligibility & Accounts */}
            <div id="eligibility" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                03 / User Accounts
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Eligibility and account registration
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  To participate in the DevEleven network, you must meet the following eligibility requirements:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Age Requirement:</strong> You must be at least 18 years of age or the age of legal majority in your jurisdiction.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Single Account Rule:</strong> Each physical individual is permitted exactly one active account. Creating secondary or puppet accounts to claim the same campaign multiple times constitutes a material breach and results in immediate account forfeiture.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Account Linking:</strong> Accounts are registered through OAuth identity providers (GitHub or Google). You are solely responsible for securing your OAuth credentials and any password configured on the platform.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 04: Creator Campaign Rules */}
            <div id="creators" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                04 / Campaign Publishing
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Creator campaign terms &amp; escrow
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  Creators who publish campaigns to incentivize social interaction must adhere to the following rules:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Budget Escrow:</strong> When a campaign is submitted, points equal to <code className="text-zinc-200 bg-white/5 px-1.5 py-0.5 rounded font-mono text-sm">pointsPerCompletion &times; targetCount</code> are deducted from your balance and locked in escrow.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Legitimate Content Only:</strong> Campaigns may only target genuine repositories, open-source projects, or authentic social profiles owned or legitimately managed by the creator. Campaigns targeting malware, phishing links, deceptive software, hate speech, or harassment targets are immediately removed without refund.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Pausing &amp; Cancellations:</strong> Creators may pause or cancel an active campaign at any time. When a campaign is cancelled, all unclaimed points locked in escrow are refunded back to the creator&apos;s available points balance.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">30-Day Retention Shield:</strong> If an earner unstars or unfollows the targeted repository or account within 30 days of completion, smart escrow automatically detects the drop and credits the points back to your campaign budget.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 05: Earner Tasks & Payouts */}
            <div id="earners" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                05 / Micro-Tasks
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Earner micro-tasks and cashouts
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  Users who participate as earners agree to perform tasks in good faith and abide by verified fulfillment requirements:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Authentic Action:</strong> You must complete each required action (e.g. starring a repository or following a profile) using your primary, verified social profile connected to your DevEleven account.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Automated Verification:</strong> Claims are verified in real time via read-only API calls. Points are credited to your balance only when our backend confirms the action was successfully executed.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">0% Cashout Deductions:</strong> DevEleven does not deduct cashout fees from earners. Withdrawals are processed in USDC or USDT directly to your specified Solana destination wallet address.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Processing Window:</strong> To prevent fraud and sybil attacks, cashout requests undergo automated audit and manual review where necessary, typically settling within 48 hours.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 06: Points Utility & Escrow */}
            <div id="points" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                06 / Platform Economics
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Points system and economic utility
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  Points are internal platform utility credits used to publish campaigns and quantify task rewards. By using the platform, you acknowledge the nature of DevEleven points:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Conversion Basis:</strong> Points convert at the standard baseline rate of $0.01 per point (100 points = $1.00 USD) for withdrawal calculations.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">No Investment Expectations:</strong> Points do not represent legal tender, equity, securities, or interest-bearing financial instruments. Points cannot be traded outside the DevEleven platform.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Ledger Authority:</strong> The internal Convex ledger maintained by DevEleven is the authoritative record of all point balances, task completions, and withdrawals.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 07: Solana Pay Subscriptions */}
            <div id="subscriptions" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                07 / On-Chain Billing
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Solana Pay subscriptions and packages
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  Users may upgrade to paid subscription tiers (Pro, Plus, Enterprise) or purchase points packages using Solana Pay:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">On-Chain Settlement:</strong> All payments are made in USDC or USDT on the Solana blockchain. Transfers are verified directly against on-chain transaction signatures.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Advance Billing:</strong> Active subscribers may pay in advance for upcoming cycles without losing remaining days on their current billing period. The newly purchased period attaches seamlessly to the end of the existing term.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Non-Refundable Transactions:</strong> Due to the immutable nature of cryptocurrency transfers on Solana, completed on-chain transactions cannot be refunded or cancelled once finalized by network validators.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 08: Prohibited Conduct */}
            <div id="prohibited" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                08 / Prohibited Activities
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Prohibited conduct and anti-sybil policy
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  DevEleven maintains a zero-tolerance policy against artificial, automated, or deceptive behavior. The following activities are strictly prohibited:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Automated Scripting &amp; Bots:</strong> Using headless browsers, bots, click-farms, scrapers, or automated macros to interact with campaigns or claim rewards.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Sybil Farming:</strong> Operating multiple accounts, puppet profiles, or disposable identities to capture multiple payouts from the same campaign.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Exploitation &amp; Tampering:</strong> Attempting to tamper with verification API calls, forge transaction signatures, exploit concurrency race conditions, or bypass escrow locks.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Deceptive Campaigns:</strong> Publishing campaigns targeting deceptive, fraudulent, or harmful software repositories.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 09: Suspension & Disputes */}
            <div id="disputes" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                09 / Enforcement &amp; Appeals
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Suspension, termination and dispute desk
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  We reserve the right to suspend or terminate accounts that violate these Terms:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Immediate Action:</strong> Accounts engaging in bot manipulation or sybil farming may be immediately suspended, with all accumulated points forfeited to reimburse impacted campaign escrow budgets.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Dispute Desk:</strong> If you believe a task verification was rejected in error or an action was taken unfairly, you may file a dispute through our 24/7 Support Desk at <Link href="/support" className="text-white hover:underline">/support</Link>. Our team reviews dispute cases with human moderation within 24 to 48 hours.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 10: Disclaimers & Liability */}
            <div id="liability" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                10 / Legal Disclaimers
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Disclaimers and limitation of liability
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  The platform is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind, whether express or implied.
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Blockchain Risks:</strong> You acknowledge that operating on public blockchains involves risks including network congestion, fluctuating gas fees, validator outages, and smart contract execution delays. DevEleven is not responsible for losses arising from external network failures.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Third-Party Platforms:</strong> DevEleven is not affiliated with, endorsed by, or sponsored by GitHub, Google, Solana, or any other third-party platform. You agree to comply with third-party terms when completing engagement tasks.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Cap on Liability:</strong> To the maximum extent permitted by applicable law, DevEleven&apos;s aggregate liability for any claims arising out of these Terms shall not exceed the total fees paid by you to DevEleven in the twelve (12) months preceding the claim.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 11: Governing Law & Contact */}
            <div id="governing" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                11 / General Provisions
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Governing law and contact
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  These Terms are governed by and construed in accordance with standard international commercial law principles. We reserve the right to amend these Terms at any time by posting updated revisions with a revised effective date.
                </p>
                <p>
                  If you have questions regarding these Terms or need to deliver official legal correspondence, please contact:
                </p>
                <ul className="space-y-3 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Support Desk:</strong> <Link href="/support" className="text-white hover:underline">/support</Link>
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Email:</strong> <a href="mailto:contact@develeven.io" className="text-white hover:underline">contact@develeven.io</a>
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Official X Account:</strong> <a href="https://github.com/DEVELEVEN-io" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@DEVELEVEN-io</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section id="faq" className="w-full px-1.5 sm:px-3 py-2 sm:py-3 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-14 lg:p-20 shadow-2xl">
          {/* Solflare two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/5 pointer-events-none z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block text-center">
              Terms &amp; Policies
            </span>
            <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-center leading-[1.08]">
              Frequently asked questions
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-10 text-center">
              Clear answers regarding campaign escrow locks, non-custodial payouts, and community rules.
            </p>

            <FAQAccordion faqs={TERMS_FAQS} />
          </div>
        </div>
      </section>

      {/* 5. Pre-Footer Support CTA (Solid Royal Indigo #4640C1 Canvas) */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 pb-8 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-[#4640C1] text-white p-10 sm:p-16 lg:p-20 shadow-2xl text-center">
          {/* Solflare two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/10 pointer-events-none z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-white/80 font-normal mb-4">
              Decentralized attention network
            </p>
            <h2 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.08] text-white">
              Ready to grow your community or earn rewards?
            </h2>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
              Join thousands of creators launching high-impact campaigns and verified earners receiving instant crypto cashouts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-lg font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56"
              >
                <Link href="/signin">Start earning</Link>
              </Button>
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-lg font-medium border-0 bg-zinc-950 text-white hover:bg-black shadow-xl cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56"
              >
                <Link href="/signin">Launch campaign</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
