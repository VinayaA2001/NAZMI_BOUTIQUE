"use client";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  const removeFromCart = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const updateQuantity = (id: string, qty: number) => {
    if (qty < 1) return;
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="container py-10 text-center">
        <h1 className="text-2xl font-semibold">Your Cart is Empty 🛒</h1>
        <p className="mt-2 text-neutral-600">
          Looks like you haven’t added anything yet.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-2 rounded-lg bg-black text-white hover:bg-neutral-800 transition"
        >
          Continue Shopping
        </a>
      </section>
    );
  }

  return (
    <section className="container py-10">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="font-medium">{item.name}</h2>
                <p className="text-sm text-neutral-600">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="number"
                value={item.quantity}
                min={1}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                className="w-16 border rounded text-center"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <p className="text-lg font-semibold">Total: ₹{total}</p>
        <button className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
          Checkout
        </button>
      </div>
    </section>
  );
}
