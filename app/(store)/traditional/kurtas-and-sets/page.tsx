// app/kurtas/page.tsx
"use client";

import Link from "next/link";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  slug: string;
};

const KURTAS: Product[] = [
  {
    id: "K001",
    name: "Handloom Cotton Kurti",
    image: "/images/churidhar5.png",
    price: 1299,
    slug: "handloom-cotton-kurti",
  },
  {
    id: "K002",
    name: "Printed Straight Kurta",
    image: "/images/churidhar3.png",
    price: 999,
    slug: "printed-straight-kurta",
  },
  {
    id: "K003",
    name: "Anarkali Flared Kurti",
    image: "/images/churidhar5.png",
    price: 1899,
    slug: "anarkali-flared-kurti",
  },
  {
    id: "K004",
    name: "Chikankari Embroidered Kurta",
    image: "/images/churidhar4.png",
    price: 2199,
    slug: "chikankari-embroidered-kurta",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen container py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Kurtas & Kurtis</h1>
      <p className="text-neutral-600 mb-8">
        Explore our collection of comfortable and elegant kurtas and kurtis — perfect for daily wear or festive occasions.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {KURTAS.map((product, index) => {
          const key = product.id ?? `${product.slug}-${index}`;
          return (
            <article
              key={key}
              className="group border rounded-xl overflow-hidden bg-white hover:shadow-md transition"
            >
              <Link href={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden">
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
                <p className="mt-2 font-semibold">₹{product.price}</p>
                <button
                  type="button"
                  className="mt-3 text-sm px-3 py-1.5 rounded-full border border-neutral-300 hover:bg-neutral-50"
                >
                  ❤️ Add to Wishlist
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
