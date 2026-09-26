import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — DevEleven",
  description:
    "Learn how DevEleven handles client data, project confidentiality, and engineering security standards.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
