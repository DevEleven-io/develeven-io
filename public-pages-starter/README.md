# DevEleven — Public Pages & Architectural Canvas Starter Pack

This standalone starter pack contains the public marketing pages, architectural canvas design system, components, styling tokens, and assets customized for **DevEleven** (Turning Ideas into Reality). You can copy this folder directly into your organization's new Next.js project to use as your website's starting point.

---

## 📁 Directory Structure

```text
public-pages-starter/
├── DESIGN_GUIDELINES.md          # Complete design system rules, principles & typography specs
├── package-dependencies.json     # Required NPM packages and install commands
├── README.md                     # This integration guide
├── app/
│   └── (public)/                 # Next.js App Router public route group
│       ├── layout.tsx            # Public layout wrapper with theme scoping
│       ├── page.tsx              # High-conversion landing page (Solflare architectural canvas)
│       ├── pricing/              # Pricing tiers, feature comparison & Solana Pay dialog
│       ├── support/              # Support center & ticket submission form
│       ├── terms/                # Legal terms & conditions (clean editorial canvas)
│       ├── privacy/              # Privacy policy (clean editorial canvas)
│       └── signin/               # Authentication page
├── components/
│   ├── hero/
│   │   ├── hero-section.tsx      # Multi-slide interactive canvas hero section
│   │   └── hero-cards-deck.tsx   # Interactive deck cards with swipe & animations
│   ├── navbar.tsx                # Dynamic floating navbar with mobile sheet
│   ├── footer.tsx                # Editorial footer with sitemap and brand column
│   ├── faq-accordion.tsx         # Accessible, standardized FAQ accordion component
│   ├── public-theme-scope.tsx    # Theme provider boundary
│   ├── theme-provider.tsx        # Light/dark mode provider
│   ├── login-form.tsx            # Auth credentials and OAuth action form
│   ├── solana-pay-dialog.tsx     # Web3 payment dialog (optional)
│   ├── icons/                    # Custom icons (e.g. USDC / USDT stablecoins)
│   └── ui/                       # shadcn/ui primitives (Button, Dialog, Sheet, Input, etc.)
├── lib/
│   ├── utils.ts                  # cn() classnames merger
│   └── constants/
│       ├── landing-faqs.ts       # Landing page FAQ data
│       ├── pricing-faqs.ts       # Pricing FAQ data
│       ├── pricing-plans.ts      # Tier definitions & feature matrix
│       └── hero-slides.ts        # Hero section slides, metrics & copies
├── public/
│   └── images/                   # Marquee logos, hero preview webp/svg assets
└── styles/
    ├── globals-snippet.css       # Tailwind v4 theme variables and color tokens
    └── root-layout-example.tsx   # Reference layout showing Google Font loading (Sora, Space Grotesk, Syne)
```

---

## 🚀 3-Step Quick Start Integration

### Step 1: Install Required Dependencies

In your new Next.js project, install the styling, icon, and primitive dependencies:

```bash
npm install clsx tailwind-merge class-variance-authority lucide-react react-icons tw-animate-css @radix-ui/react-dialog @radix-ui/react-slot framer-motion
```

### Step 2: Configure Fonts & Styling

1. **Fonts (`app/layout.tsx`)**:
   Load **Space Grotesk**, **Sora**, and **Syne** using `next/font/google` and attach their CSS variables to `<html>`:
   ```tsx
   import { Sora, Space_Grotesk, Syne } from "next/font/google";

   const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
   const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
   const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["800"] });

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en" className={`${sora.variable} ${spaceGrotesk.variable} ${syne.variable} font-sans`}>
         <body className="antialiased bg-zinc-950 text-foreground">{children}</body>
       </html>
     );
   }
   ```

2. **Tailwind & Theme Tokens (`app/globals.css`)**:
   Copy the tokens from `styles/globals-snippet.css` into your `app/globals.css`. This configures:
   - `@custom-variant dark (&:where(.dark, .dark *));`
   - `.font-brand` mapping to Space Grotesk
    - Semantic tokens: `--background`, `--foreground`, `--primary` (`#38bdf8`), `--border`, etc.

### Step 3: Copy Files into your Project

- Copy `components/` into your project's `components/`
- Copy `lib/` into your project's `lib/`
- Copy `public/images/` into your project's `public/images/`
- Copy `app/(public)/` into your project's `app/(public)/` (or map `page.tsx` directly to `app/page.tsx`)

---

## 🎨 Design Rules & Guidelines

Please consult [DESIGN_GUIDELINES.md](./DESIGN_GUIDELINES.md) for full design standards:

1. **Outer Canvases Never Have Borders**:
   Architectural cards use `rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white shadow-2xl` on a `bg-zinc-950` wrapper. Do **not** apply `border` to outer cards.
2. **50% Split Overlays**:
   Each large canvas uses `<div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/10 pointer-events-none z-0" />`.
3. **Typography Standard**:
   - Eyebrows: `font-mono text-xs uppercase tracking-widest text-zinc-400`
   - H1: `font-brand text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white`
   - H2: `font-brand text-3xl sm:text-5xl font-bold tracking-tight text-white`
   - Body: `text-base sm:text-lg text-zinc-400`
4. **Cyan/Sky Usage**:
   Reserved strictly for high-priority CTA pill buttons (`h-12 sm:h-14 rounded-full px-8 bg-[#38bdf8] text-zinc-950 hover:bg-sky-300`), key guarantee modules, and highlights.
5. **No Filler Slop**:
   Avoid fake testimonials or invented personas. Keep copy focused on real value and features.

---

## 🔧 Backend / Auth Decoupling Note

In this template, files such as `components/navbar.tsx`, `pricing/page.tsx`, and `support/page.tsx` originally connected to Convex backend functions.

- If your new project does **not** use Convex:
  - In `components/navbar.tsx`, remove `import { useConvexAuth } from "convex/react";` and set `const isAuthenticated = false; const isLoading = false;` (or connect to your own auth provider like NextAuth, Supabase, Clerk, etc.).
  - In `app/(public)/support/page.tsx` and `app/(public)/pricing/page.tsx`, replace `useQuery(api...)` with your standard API fetch or mock data.
