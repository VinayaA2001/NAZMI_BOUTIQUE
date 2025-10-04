import { Search, User, ShoppingCart, Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="font-semibold tracking-tight text-lg">
          Nazmi Boutique
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="/traditional" className="hover:text-gray-700">Traditional</a>
          <a href="/western" className="hover:text-gray-700">Western</a>
          <a href="/occasions/office" className="hover:text-gray-700">Occasions</a>
          <a href="/sale/under-999" className="text-red-600 hover:text-red-700">Sale</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="/search" className="hover:text-gray-700" aria-label="Search">
            <Search className="w-5 h-5" />
          </a>
          <a href="/account" className="hover:text-gray-700" aria-label="Account">
            <User className="w-5 h-5" />
          </a>
          <a href="/wishlist" className="hover:text-gray-700" aria-label="Wishlist">
            <Heart className="w-5 h-5" />
          </a>
          <a href="/cart" className="hover:text-gray-700" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
