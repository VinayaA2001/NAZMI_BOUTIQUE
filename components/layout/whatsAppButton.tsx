"use client";
import { usePathname } from "next/navigation";
export default function WhatsAppButton({ label = "Chat on WhatsApp", preset = "Hi! I have a question." }:{ label?:string; preset?:string }){
const pathname = usePathname();
const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""; // 91xxxxxxxxxx
if(!phone) return null;
const text = encodeURIComponent(`${preset}


Page: ${typeof window!=="undefined"?window.location.origin:""}${pathname}`);
const href = `https://wa.me/${phone}?text=${text}`;
return (
<a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-card hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]">
<span aria-hidden>🟢</span><span>{label}</span>
</a>
);
}