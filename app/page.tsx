// app/page.tsx
import Slomo from "@/components/blocks/slomo";
import ProductGrid from "@/components/commerce/ProductGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff8f3] via-[#fdece4] to-[#fff8f3] py-16 px-6 md:px-20 space-y-20 rounded-3xl shadow-inner">

      {/* Hero Section (replaced) */}
      <Slomo />

      {/* Featured Categories (unchanged) */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Explore Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="/traditional"
            className="group relative block overflow-hidden rounded-xl shadow hover:shadow-lg"
          >
            <img
              src="/images/traditionsaree.png"
              alt="Traditional"
              className="w-full h-60 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-bold">
              Traditional
            </div>
          </a>

          <a
            href="/western"
            className="group relative block overflow-hidden rounded-xl shadow hover:shadow-lg"
          >
            <img
              src="/images/western dress.png"
              alt="Western"
              className="w-full h-60 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-bold">
              Western
            </div>
          </a>

          <a
            href="/sale/under-999"
            className="group relative block overflow-hidden rounded-xl shadow hover:shadow-lg"
          >
            <img
              src="/images/sales.png"
              alt="Sale"
              className="w-full h-60 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-bold">
              Sale
            </div>
          </a>
        </div>
      </section>

      {/* Featured Products (unchanged) */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">New Arrivals</h2>
        <ProductGrid />
      </section>
    </main>
  );
}