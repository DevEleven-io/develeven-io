# Design System & Public Page Design Guidelines

This document contains the design conventions, styling architecture, and public page design principles extracted from the project. Use this reference when building or redesigning pages to maintain visual consistency and editorial quality.

---

## 1. Styling Conventions & Tech Stack

- **Tailwind CSS v4** with shadcn-style CSS variables.
- All styling must use **Tailwind utility classes** — no CSS modules or styled-components.
- **Light mode & Dark mode**:
  - Light mode: `bg-white text-black`
  - Dark mode: `dark:bg-zinc-900 dark:text-white`
  - Powered by `@custom-variant dark (&:where(.dark, .dark *))` in CSS.
- **Semantic Theme Variables**:
  - Use theme CSS variables (`bg-background`, `text-foreground`, `border-border`, `bg-muted`, etc.) so components switch values cleanly across themes.
- **Class Merging**:
  - Use `cn()` helper (`clsx` + `tailwind-merge`) for conditional class merging.
- **shadcn/ui Component Primitive Standard**:
  - Use standard UI primitives from `components/ui/` (e.g. Button, Input, Sheet, Dialog, DropdownMenu). Do not rebuild standard interactive elements from scratch if a shadcn primitive exists.
- **Typography Font Stack**:
  - **Brand / Headings (`font-brand`)**: Space Grotesk / Syne with tight tracking (`letter-spacing: -0.02em`).
  - **Body / Sans (`font-sans`)**: Sora / Inter / Geist.
  - **Eyebrows & Metrics (`font-mono`)**: Monospace / JetBrains Mono for technical labels, badges, and uppercase tracking.

---

## 2. Core Design Principles

- **No Tiny / Unreadable Text**:
  - Avoid tiny text sizes (`text-[9px]`, `text-[10px]`).
  - Labels, metadata, and controls must be clearly legible using standard sizing (`text-xs`, `text-sm`, `text-base`).
- **Cyan / Sky Accent Usage**:
  - **DO NOT** scatter bright cyan/sky across every single element.
  - Cyan / Sky (`#38bdf8`, `sky-400`, or `cyan-400`) is strictly reserved for:
    1. Key guarantees / hero metric feature blocks
    2. High-priority action buttons (e.g., *Get in Touch*, *Hire Us*, *Explore Services*)
    3. Active highlights and primary status indicators
  - Standard navigation tabs, active filters, secondary buttons, and UI controls must use neutral semantic theme tokens (`bg-foreground text-background`, `bg-muted`, `border-border`).
- **Tailwind Color Standard (No Raw Hex Slop)**:
  - Do not scatter arbitrary hex colors (`#18181b`, `#fafafa`) or custom nude CSS declarations throughout components.
  - Use Tailwind utility classes (`bg-background`, `text-foreground`, `bg-zinc-900`, `border-border`).
  - When defining CSS variables, reference standard Tailwind color tokens (`var(--color-zinc-900)`, `var(--color-zinc-800)`, `var(--color-zinc-50)`, `var(--color-sky-400)`).
- **No Fake Filler / "Slop" Content**:
  - NEVER fabricate fake testimonials, fake quotes, fake employee identities, or invented personas (e.g. "Michael Brown, IT Director") to fill layout space.
  - Keep all UI copy authentic, functional, concise, and grounded strictly in the product's actual features.
- **Containers Must Never Have Borders**:
  - Outer architectural canvas cards (`rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl`) must **NEVER** have borders (do **not** use `border`, `border-white/10`, or `border-border` on outer canvases).
  - Canvases rely entirely on borderless dark elevation, large corner radii, and deep shadows.
- **No Nested Card Containers**:
  - Do **not** nest mini card boxes (e.g. `bg-zinc-950/70 border border-white/10 p-4 rounded-xl`) inside main content or reading sections.
  - Avoid cramped multi-column sidebars when presenting detailed prose or legal documentation. Layouts must feel open, spacious, and editorial.
- **No Unnecessary / Sloppy Icons**:
  - Do **not** scatter arbitrary decorative icons next to every paragraph, feature bullet, or section header.
  - Reserve icons strictly for functional controls (dropdown chevrons, external links, social links, buttons).

---

## 3. Public Page Design System (Solflare Architectural Canvases)

All public-facing pages must adhere to this unified visual language:

### Outer Canvas Architecture
- **Section Wrapper**:
  ```tsx
  w-full px-1.5 sm:px-3 py-2 sm:py-3 bg-zinc-950
  ```
- **Canvas Card**:
  ```tsx
  relative w-full max-w-screen-2xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-zinc-900 text-white p-8 sm:p-14 lg:p-20 shadow-2xl
  ```
  *(Remember: strictly NO borders on outer canvas cards).*
- **Two-Tone Split Overlay**:
  Every large canvas includes a subtle 50% split overlay to add depth without distracting textures:
  ```tsx
  <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-black/10 pointer-events-none z-0" />
  ```
  *(Use `bg-black/5` on lighter canvases or `bg-black/10` on dark canvases).*

### Typography Hierarchy & Standards
- **Eyebrows / Overlines**:
  ```tsx
  font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-normal mb-3 sm:mb-4 block
  ```
  *(Use `text-zinc-950/70` when placed on bright yellow canvases).*
- **Hero Heading (H1)**:
  ```tsx
  font-brand text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]
  ```
- **Section Heading (H2)**:
  ```tsx
  font-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.08]
  ```
- **Body Prose**:
  ```tsx
  text-base sm:text-lg text-zinc-400 font-normal leading-relaxed
  ```
  Use `text-white font-semibold` within body prose for intentional emphasis.
- **Section Dividers**:
  Separate distinct sections, directory entries, or policy topics with clean dividers:
  ```tsx
  border-t border-white/10
  ```

### Interactive Elements & Action Buttons
- **Pill-Shaped Action Buttons**:
  ```tsx
  h-12 sm:h-14 rounded-full px-8 text-base font-semibold border-0
  ```
- **Primary Call-to-Action**:
  High-emphasis pill button using the accent cyan/sky token (`bg-[#38bdf8] text-zinc-950 hover:bg-sky-300` or `bg-sky-400 text-zinc-950`).
- **Secondary Action**:
  Subtle neutral button (`bg-white/10 hover:bg-white/20 text-white`).

### Key Guarantees & Metrics Module
When displaying hero metrics, trust statistics, or key value guarantees:
- **Cyan / Sky Canvas**:
  ```tsx
  bg-[#38bdf8] text-zinc-950 rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16
  ```
- **Metric Numbers**:
  ```tsx
  font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-none mb-2.5 sm:mb-3
  ```
- **Metric Labels**:
  ```tsx
  font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-950/80
  ```

---

## 4. Shared Public UI Components & Patterns

### FAQ Sections
- Use an accordion pattern (`FAQAccordion`).
- Never build custom unstyled collapsible `<details>`/`<summary>` elements.
- Clean divider lines (`border-t border-white/10`) between items.
- Smooth expansion with clean typography.

### Marquee / Social Proof Ticker
- Background: Continuous `bg-zinc-950`.
- Outer fade edges using gradient masks:
  ```tsx
  before:bg-gradient-to-r before:from-zinc-950 before:to-transparent after:bg-gradient-to-l after:from-zinc-950 after:to-transparent
  ```
- Partner / ecosystem logos: Monochrome styling with `brightness-0 invert opacity-85 hover:opacity-100 transition-opacity`.
