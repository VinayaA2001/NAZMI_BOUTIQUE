import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Nazmi Boutique",
    template: "%s • Nazmi Boutique",
  },
  description: "Minimal, elegant fashion — Traditional & Western.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col bg-white text-neutral-900">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton
  phone="+919995947709" // 👈 replace with your number
  preset="Hi Nazmi! I have a question about this page."
        />
      </body>
    </html>
  );
}
