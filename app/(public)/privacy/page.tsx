"use client";

import Link from "next/link";
import { FAQAccordion, type FAQ } from "@/components/faq-accordion";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const PRIVACY_FAQS: FAQ[] = [
  {
    question: "Does DevEleven ever have access to my crypto wallet's private keys or seed phrase?",
    answer:
      "No. DevEleven is completely non-custodial. We never request, transmit, or store your private keys or seed phrases. All transactions and withdrawals are signed directly by you inside your self-custodial wallet.",
  },
  {
    question: "What data does DevEleven receive when I connect my GitHub account?",
    answer:
      "When you sign in via GitHub, we receive your public numeric GitHub ID, username, primary verified email address, and avatar image. When verifying tasks, our system performs read-only checks against public GitHub endpoints. We never request write access to your repositories or private code.",
  },
  {
    question: "Why are my wallet address and transaction history publicly visible?",
    answer:
      "DevEleven processes payments and cashouts on the Solana blockchain. Because Solana is an open, decentralized ledger, transactions—including token amounts, timestamps, and public wallet addresses—are recorded on-chain and visible on public block explorers. This is an inherent property of blockchain networks.",
  },
  {
    question: "How can I request the deletion of my account and personal data?",
    answer:
      "You can request complete account closure and off-chain data deletion at any time by opening a ticket at our Support Desk (/support) or emailing contact@develeven.io. We will delete your account records, linked profile metadata, and email from our database. On-chain transaction records cannot be modified or deleted.",
  },
];

const DIRECTORY_ITEMS = [
  { number: "01", label: "Scope & Data Controller", href: "#scope" },
  { number: "02", label: "Information We Collect", href: "#collection" },
  { number: "03", label: "What We Never Collect", href: "#exclusions" },
  { number: "04", label: "How We Use Information", href: "#usage" },
  { number: "05", label: "Public Blockchain Records", href: "#blockchain" },
  { number: "06", label: "Task Verification Engine", href: "#verification" },
  { number: "07", label: "Third-Party Infrastructure", href: "#third-parties" },
  { number: "08", label: "Security & Retention", href: "#security" },
  { number: "09", label: "Your Privacy Rights", href: "#rights" },
  { number: "10", label: "Cookies & Technical Logs", href: "#cookies" },
  { number: "11", label: "Contact & Dispute Desk", href: "#contact" },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              How DevEleven collects, processes, and protects your information across our non-custodial social engagement protocol, micro-task feeds, and smart escrow system.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0 bg-white text-zinc-950 hover:bg-zinc-200 shadow-xl cursor-pointer transition-transform hover:scale-105"
              >
                <a href="#scope">Read policy</a>
              </Button>
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0 bg-zinc-800 hover:bg-zinc-700 text-white shadow-xl cursor-pointer"
              >
                <Link href="/support">Contact support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Guarantees / Policy Summary Banner (Solflare Yellow #38bdf8) */}
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
                Custody of private keys
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                Zero
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80">
                Data sold to ad brokers
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                100%
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80">
                Read-only verification
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3">
                Public
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80">
                On-chain settlement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Policy Canvas */}
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
                Policy contents
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

            {/* Section 01: Scope & Controller */}
            <div id="scope" className="pt-10 sm:pt-14 border-t border-white/10 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                01 / Scope &amp; Controller
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Scope and data controller
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  This Privacy Policy applies to the services, websites, micro-task feeds, and smart escrow contracts operated by DevEleven (&ldquo;DevEleven&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). DevEleven is the data controller responsible for personal information processed through the platform.
                </p>
                <p>
                  Our platform connects creators seeking authentic social engagement with independent earners who complete verified engagement tasks. This policy explains what information is collected, how it is processed to verify tasks and distribute rewards, and how public blockchain settlement interacts with user privacy.
                </p>
                <p>
                  For any privacy inquiries or legal notices, our designated contact is <a href="mailto:contact@develeven.io" className="text-white hover:underline">contact@develeven.io</a> or through our online Support Desk at <Link href="/support" className="text-white hover:underline">/support</Link>.
                </p>
              </div>
            </div>

            {/* Section 02: Information We Collect */}
            <div id="collection" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                02 / Data Collection
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Information we collect
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  DevEleven adheres to strict data minimization. We only collect information essential for account security, task verification, and financial settlement:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Account &amp; OAuth Identity:</strong> When authenticating through GitHub, we receive your permanent numeric GitHub ID, GitHub username, primary verified email address, and avatar image. When signing in through Google, we receive your primary email address and display name. If you configure a password in Settings, it is stored strictly as a salted, one-way cryptographic hash.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Social Campaigns &amp; Task Data:</strong> For campaign creators, we record the target URL (such as a GitHub repository or profile), task goals, and escrowed points. For earners, we record task completion timestamps, claimed campaigns, and earned points.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Solana Wallet &amp; Payment Identifiers:</strong> When you purchase points or subscriptions via Solana Pay, we record the unique order reference public key and the on-chain transaction signature. When you withdraw earnings, we store your destination Solana wallet address, payout token (USDC or USDT), and payout transaction hash.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Support Correspondence:</strong> When you submit an issue through our Support Desk, we collect your name, email address, category selection, message text, and an assigned ticket reference code.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Technical Request Logs:</strong> Standard HTTP request data including IP addresses, timestamps, and browser user-agent headers are collected to prevent DDoS attacks, enforce rate limits, and detect multi-account farming.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 03: What We Never Collect */}
            <div id="exclusions" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                03 / Exclusions &amp; Safety
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                What we never collect
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  To eliminate custody risks and protect user privacy, DevEleven enforces clear technical boundaries:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Private Keys &amp; Recovery Phrases:</strong> We never request, process, or store secret keys or seed phrases. Your wallet credentials remain strictly inside your self-custodial wallet.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Credit Card Numbers:</strong> We do not store or process traditional payment cards. Subscriptions and points purchases are settled on-chain via Solana Pay.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Private Repositories &amp; Source Code:</strong> Our task verification engine queries public actions only. We never request write permissions or access to private repositories.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Government Identification:</strong> We do not require national ID uploads, passport scans, or biometric data for standard platform participation.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 04: How We Use Information */}
            <div id="usage" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                04 / Data Processing
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                How we use your information
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  We process personal data strictly to deliver platform functionality and maintain ecosystem integrity:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Authentication:</strong> Maintaining secure user sessions and preventing unauthorized access to account settings.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Task Verification &amp; Escrow Releases:</strong> Verifying genuine social engagement via read-only APIs and atomically transferring points from campaign escrow to the earner balance.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Payment Settlement &amp; Withdrawals:</strong> Verifying Solana Pay transaction finality and broadcasting non-custodial crypto withdrawals to verified earner wallet addresses.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Anti-Abuse &amp; Sybil Prevention:</strong> Detecting automated bot scripts, sybil attack rings, and duplicate claim submissions to ensure real human engagement for creators.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Support Resolution:</strong> Addressing disputed task claims, payment matching questions, and technical support inquiries.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 05: Public Blockchain Records */}
            <div id="blockchain" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                05 / Decentralized Ledgers
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Public blockchain records
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  The Solana network is an open, permissionless, and immutable public ledger. When you make a payment via Solana Pay or initiate an earner cashout, the following information is broadcast to the network:
                </p>
                <ul className="space-y-3 list-disc pl-6 text-zinc-300">
                  <li>Your public wallet address.</li>
                  <li>The token transferred (USDC or USDT) and numeric amount.</li>
                  <li>The transaction timestamp and cryptographic signature.</li>
                </ul>
                <p>
                  These records are publicly searchable by anyone on block explorers such as Solscan. Due to the decentralized and immutable nature of blockchain networks, DevEleven has no ability to edit, modify, or delete on-chain transaction history.
                </p>
              </div>
            </div>

            {/* Section 06: Task Verification Engine */}
            <div id="verification" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                06 / Verification Engine
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Task verification engine
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  DevEleven verifies social actions using official, read-only third-party endpoints. For GitHub campaigns, our backend queries public REST endpoints to verify whether an action was completed:
                </p>
                <ul className="space-y-3 list-disc pl-6 text-zinc-300">
                  <li>Repository stars: Checked via public star status endpoints.</li>
                  <li>User follows: Checked via public user following endpoints.</li>
                </ul>
                <p>
                  These verification checks only inspect public status codes. DevEleven never requests write scopes, git commit rights, or access to private repositories.
                </p>
              </div>
            </div>

            {/* Section 07: Third-Party Infrastructure */}
            <div id="third-parties" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                07 / Third Parties
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Third-party sharing
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  DevEleven does not sell, lease, or monetize your personal data with third-party advertisers, data brokers, or profiling companies.
                </p>
                <p>
                  We share data exclusively with trusted technical infrastructure providers necessary to operate the application:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Convex Cloud:</strong> Provides serverless database infrastructure, reactive state sync, and encrypted storage.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Solana RPC Infrastructure:</strong> Transmits on-chain payment requests and queries transaction finality.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">OAuth Identity Providers:</strong> GitHub and Google validate identity tokens during authentication.
                  </li>
                </ul>
                <p>
                  We will disclose account records only if strictly compelled to do so by a valid, legally binding court order or government subpoena.
                </p>
              </div>
            </div>

            {/* Section 08: Security & Retention */}
            <div id="security" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                08 / Security &amp; Retention
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Security and data retention
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  We implement robust technical and organizational security controls:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Encryption:</strong> All web traffic is encrypted in transit using TLS 1.3. Backend databases are encrypted at rest with industry-standard cryptographic algorithms.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Access Control:</strong> Database mutations enforce strict user-level authorization rules. No user can read or modify another user&apos;s private credentials.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Retention Policies:</strong> Account data is retained for the lifetime of your active account. Financial ledger records and claim logs are retained for up to 36 months to resolve billing disputes, prevent sybil attacks, and comply with accounting standards.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 09: Your Privacy Rights */}
            <div id="rights" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                09 / User Rights
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Your privacy rights
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  Regardless of your location, you have clear rights regarding your personal data:
                </p>
                <ul className="space-y-4 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Right of Access:</strong> You can review your account profile, points balance, campaign history, and withdrawal activity directly in your dashboard.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Right to Rectification:</strong> You can update connected accounts and passwords from your account settings at any time.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Right to Erasure:</strong> You can request the permanent deletion of your off-chain account data, profile details, and email by submitting a ticket to our Support Desk.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Right to Discontinue:</strong> You may cease participating in tasks or pause active campaigns whenever you choose.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 10: Cookies & Technical Logs */}
            <div id="cookies" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                10 / Tracking
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Cookies and technical logs
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  DevEleven uses strictly essential authentication session cookies to maintain your login state securely across sessions.
                </p>
                <p>
                  We do not use advertising cookies, third-party marketing pixels, or cross-site tracking scripts. Standard web server logs (IP address, user-agent) are retained temporarily for security auditing, DDoS defense, and rate-limiting abusive requests.
                </p>
              </div>
            </div>

            {/* Section 11: Contact & Dispute Desk */}
            <div id="contact" className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16 scroll-mt-24">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 block">
                11 / Contact
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                Contact and dispute desk
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                <p>
                  If you have questions about this Privacy Policy, wish to exercise your data protection rights, or have a dispute regarding task verification, you can contact us through:
                </p>
                <ul className="space-y-3 list-disc pl-6 text-zinc-300">
                  <li>
                    <strong className="text-white font-semibold">Support Desk:</strong> Submit a ticket at <Link href="/support" className="text-white hover:underline">/support</Link> for direct assistance.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Direct Email:</strong> Write to <a href="mailto:contact@develeven.io" className="text-white hover:underline">contact@develeven.io</a> for privacy inquiries.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Community Support:</strong> Reach out on X at <a href="https://github.com/DEVELEVEN-io" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@DEVELEVEN-io</a>.
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
              Questions &amp; Answers
            </span>
            <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-center leading-[1.08]">
              Frequently asked questions
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-10 text-center">
              Common questions about blockchain settlement, read-only API access, and account privacy.
            </p>

            <FAQAccordion faqs={PRIVACY_FAQS} />
          </div>
        </div>
      </section>

      {/* 5. Pre-Footer Support CTA (Signature Sky Canvas #38bdf8) */}
      <section className="w-full px-1.5 sm:px-3 py-2 sm:py-3 pb-8 bg-zinc-950">
        <div className="relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-[#38bdf8] text-zinc-950 p-10 sm:p-16 lg:p-20 shadow-2xl text-center">
          {/* Solflare two-tone vertical split overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/5 pointer-events-none z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-950/70 font-normal mb-4">
              We&apos;re here to help
            </p>
            <h2 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.08] text-zinc-950">
              Questions about your account data?
            </h2>
            <p className="text-zinc-900/80 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
              Our support team reviews tickets daily and responds within 24 hours to assist with disputes, verification checks, or data deletion requests.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-lg font-semibold border-0 bg-zinc-950 text-white hover:bg-black shadow-xl cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56"
              >
                <Link href="/support">Open support desk</Link>
              </Button>
              <Button
                asChild
                className="h-12 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-lg font-medium border-0 bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl cursor-pointer transition-transform hover:scale-105 min-w-48 sm:min-w-56"
              >
                <Link href="/">Back to home</Link>
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
