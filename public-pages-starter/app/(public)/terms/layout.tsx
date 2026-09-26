import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — DevEleven",
  description:
    "Review DevEleven's engineering engagement terms, intellectual property standards, and project agreements.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
