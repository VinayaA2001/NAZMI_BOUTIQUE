// app/traditional/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  category: "Saree" | "Salwar" | "Lehenga" | "Kurti";
  slug: string;
};

// --- Mock data (replace with your data source) ---
const ALL_PRODUCTS: Product[] = [
  {
    id: "TRAD-002",
    name: "Embroidered Anarkali Suit",
    image: "/images/traditional/salwar-1.png",
    price: 3299,
    category: "Salwar",
    slug: "embroidered-anarkali-suit",
  },
  {
    id: "TRAD-003",
    name: "Mirror Work Lehenga",
    image: "/images/traditional/lehenga-1.png",
    price: 8999,
    category: "Lehenga",
    slug: "mirror-work-lehenga",
  },
  {
    id: "TRAD-004",
    name: "Handloom Cotton Kurti",
    image: "/images/churidhar2.png",
    price: 1299,
    category: "Kurti",
    slug: "handloom-cotton-kurti",
  },
  {
    id: "TRAD-005",
    name: "Banarasi Zari Saree",
    image: "/images/churidhar4.png",
    price: 7499,
    category: "Salwar",
    slug: "banarasi-zari-saree",
  },
  {
    id: "TRAD-006",
    name: "Georgette Sharara Suit",
    image: "/images/churidhar5.png",
    price: 2899,
    category: "Salwar",
    slug: "georgette-sharara-suit",
  },
];

const CATEGORIES = ["All", "Saree", "Salwar", "Lehenga", "Kurti"] as const;

export default function Page() {
  const [category, setCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return ALL_PRODUCTS.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesPrice = p.price <= maxPrice;
      const matchesQuery =
        q.trim() === "" ||
        p.name.toLowerCase().includes(q.trim().toLowerCase());
      return matchesCategory && matchesPrice && matchesQuery;
    });
  }, [category, maxPrice, q]);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl mx-4 md:mx-6 mt-6 bg-gradient-to-br from-[#fff8f3] via-[#fdece4] to-[#fff8f3]">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/traditional/hero-texture.png')] bg-cover bg-center" />
        <div className="relative px-6 md:px-12 py-14 md:py-20">
          <p className="uppercase tracking-widest text-sm text-rose-700/80">
            Nazmi Boutique
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
            Traditional & Ethnic Wear
          </h1>
          <p className="mt-3 md:mt-4 text-neutral-700 max-w-2xl">
            Handpicked sarees, elegant salwar sets, festive lehengas, and daily-wear kurtis—crafted to
            celebrate culture with modern comfort.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  category === c
                    ? "bg-black text-white border-black"
                    : "bg-white hover:bg-neutral-50 border-neutral-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="container px-6 md:px-12 mt-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <label className="text-sm text-neutral-700">
              Max Price: <span className="font-medium">₹{maxPrice}</span>
            </label>
            <input
              type="range"
              min={500}
              max={10000}
              step={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-56"
            />
          </div>

          <div className="relative w-full md:w-80">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search outfits…"
              className="w-full rounded-lg border border-neutral-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <span className="pointer-events-none absolute right-3 top-2.5 text-neutral-400">
              🔎
            </span>
          </div>
        </div>

        {/* Result count */}
        <p className="text-sm text-neutral-600 mt-3">
          Showing {filtered.length} {filtered.length === 1 ? "item" : "items"}
          {category !== "All" && <> in <b>{category}</b></>}
        </p>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {filtered.map((product, index) => {
            // Robust key: prefer id; fallback to composite if needed
            const key = product.id ?? `${product.slug}-${index}`;
            return (
              <article
                key={key}
                className="group border rounded-xl overflow-hidden bg-white hover:shadow-md transition"
              >
                <Link href={`/product/${product.slug}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="p-4">
                  <Link
                    href={`/product/${product.slug}`}
                    className="block font-medium line-clamp-1 hover:underline"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-neutral-500">{product.category}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold">₹{product.price}</span>
                    <button
                      type="button"
                      className="text-sm px-3 py-1.5 rounded-full border border-neutral-300 hover:bg-neutral-50"
                      // onClick={() => addToWishlist(product)} // wire this to your wishlist
                    >
                      ❤️ Wishlist
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-20 text-center text-neutral-500">
            No items match your filters. Try another category or price range.
          </div>
        )}
      </section>
    </main>
  );
}
