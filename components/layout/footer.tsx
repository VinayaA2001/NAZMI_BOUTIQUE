import { Instagram, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-16">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4 text-sm">
        
        {/* Brand Info */}
        <div>
          <h2 className="font-bold text-xl">Nazmi Boutique</h2>
          <p className="mt-4 text-gray-500 leading-relaxed max-w-xs">
            Minimal fashion from Kerala — blending Traditional & Western styles
            with elegance.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-semibold text-gray-800 tracking-wide">Shop</h3>
          <ul className="mt-4 space-y-3">
            <li><a href="/traditional" className="text-gray-600 hover:text-black">Traditional</a></li>
            <li><a href="/western" className="text-gray-600 hover:text-black">Western</a></li>
            <li><a href="/sale/under-999" className="text-gray-600 hover:text-black">Sale</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="font-semibold text-gray-800 tracking-wide">Help</h3>
          <ul className="mt-4 space-y-3">
            <li><a href="/faq" className="text-gray-600 hover:text-black">FAQ</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-black">Contact</a></li>
            <li><a href="/policies/returns" className="text-gray-600 hover:text-black">Returns</a></li>
          </ul>
        </div>

        {/* Follow Links */}
        <div>
          <h3 className="font-semibold text-gray-800 tracking-wide">Follow Us</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="https://www.instagram.com/nazmiboutique_?utm_source=ig_web_button_share_sheet&igsh=dXZpdnM1eDdwb2dk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-black"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-black"
              >
                <Youtube className="w-4 h-4" /> YouTube
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919995947709"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-black"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Nazmi Boutique · All Rights Reserved
      </div>
    </footer>
  );
}
