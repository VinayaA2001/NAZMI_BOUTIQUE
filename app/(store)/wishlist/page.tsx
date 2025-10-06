"use client";
import { useState, useEffect } from "react";

type WishlistItem = {
  id?: number | string;
  name: string;
  image: string;
  price: string | number;
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const removeItem = (id?: number | string) => {
    if (!id) return;
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <section className="container py-10">
      <h1 className="text-2xl font-semibold mb-6">My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-20 text-neutral-500">
          <p className="text-lg">Your wishlist is empty.</p>
          <p className="mt-2">
            Browse products and click the ❤️ icon to save them here.
          </p>
          <a
            href="/"
            className="inline-block mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-neutral-800 transition"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {wishlist.map((item, index) => {
            // use id if available, otherwise fallback to index
            const key = item.id ?? `${item.name}-${index}`;
            return (
              <div key={key} className="border rounded-lg p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="mt-2 font-medium">{item.name}</h2>
                <p className="text-sm text-neutral-600">{item.price}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-2 text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
