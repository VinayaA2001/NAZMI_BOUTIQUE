"use client";
import { useEffect, useState } from "react";
import { Heart, ShoppingCart, User, Search } from "lucide-react";

export default function Header() {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Load counts from localStorage on mount
    const loadCounts = () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setWishlistCount(wishlist.length);
      setCartCount(cart.reduce((sum: number, item: any) => sum + item.quantity, 0));
    };

    loadCounts();

    // Listen to changes (optional: in case you trigger events elsewhere)
    window.addEventListener("storage", loadCounts);
    return () => window.removeEventListener("storage", loadCounts);
  }, []);

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
        <div className="flex items-center gap-6 text-sm font-medium">
          {/* Search */}
          <a href="/search" className="relative hover:text-gray-700">
            <Search className="w-5 h-5" />
          </a>

          {/* Account */}
          <a href="/account" className="relative hover:text-gray-700">
            <User className="w-5 h-5" />
          </a>

          {/* Wishlist */}
          <a href="/wishlist" className="relative hover:text-gray-700">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </a>

          {/* Cart */}
          <a href="/cart" className="relative hover:text-gray-700">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-black text-white w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </a>
        </div>
      </div>
    </header>
  );
}
