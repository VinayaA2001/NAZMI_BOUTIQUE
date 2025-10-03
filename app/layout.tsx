import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";        // ✅ no .tsx
import WhatsAppButton from "@/components/layout/whatsAppButton";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: { default: "Nazmi Boutique", template: "%s • Nazmi Boutique" },
  description: "Minimal, elegant fashion — Traditional & Western.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col bg-white text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton preset="Hi Nazmi! I have a question about this page." />
      </body>
    </html>
  );
}