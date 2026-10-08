import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
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
      className={`${manrope.variable} font-sans`}
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
