import type { Metadata } from "next";
import { Sora, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ThemeProvider } from "@/components/theme-provider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["800"],
});

export const metadata: Metadata = {
  title: "DevEleven — Turning Ideas into Reality | Web & Software Engineering",
  description:
    "We build elegant websites, robust backend systems, and modern digital products at affordable prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${spaceGrotesk.variable} ${syne.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-zinc-950 text-foreground min-h-screen">
        <ConvexClientProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
