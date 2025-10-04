export default function Footer() {
  return (
    <footer className="border-t mt-10 bg-white">
      <div className="container mx-auto px-4 py-12 grid gap-8 text-sm md:grid-cols-4">
        
        {/* Brand Info */}
        <div>
          <h2 className="font-semibold text-lg">Nazmi Boutique</h2>
          <p className="mt-3 text-gray-500 max-w-xs">
            Minimal fashion from Kerala — Traditional & Western.
          </p>
        </div>

        {/* Shop Links */}
        <nav aria-label="Shop" className="space-y-2">
          <h3 className="font-medium">Shop</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/traditional" className="hover:underline hover:text-black">Traditional</a></li>
            <li><a href="/western" className="hover:underline hover:text-black">Western</a></li>
            <li><a href="/sale/under-999" className="hover:underline hover:text-black">Sale</a></li>
          </ul>
        </nav>

        {/* Help Links */}
        <nav aria-label="Help" className="space-y-2">
          <h3 className="font-medium">Help</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/faq" className="hover:underline hover:text-black">FAQ</a></li>
            <li><a href="/contact" className="hover:underline hover:text-black">Contact</a></li>
            <li><a href="/policies/returns" className="hover:underline hover:text-black">Returns</a></li>
          </ul>
        </nav>

        {/* Follow Links */}
        <nav aria-label="Follow us" className="space-y-2">
          <h3 className="font-medium">Follow</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline hover:text-black">Instagram</a></li>
            <li><a href="#" className="hover:underline hover:text-black">WhatsApp</a></li>
          </ul>
        </nav>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Nazmi Boutique. All rights reserved.
      </div>
    </footer>
  );
}
