import Navbar from "@/components/navbar";
import { PublicThemeScope } from "@/components/public-theme-scope";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PublicThemeScope>
      <div className="flex min-h-screen flex-col bg-zinc-950">
        <Navbar />
        <main className="flex-1 flex flex-col w-full bg-zinc-950">
          {children}
        </main>
      </div>
    </PublicThemeScope>
  );
}
