// app/page.tsx

import ProductGrid from "@/components/commerce/ProductGrid";

export default function HomePage() {
  return (
    <main className="container mx-auto py-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100 rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Nazmi Boutique
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover minimal and elegant fashion from Kerala — a perfect blend of
          Traditional & Western wear.
        </p>
        <div className="mt-6">
          <a
            href="/traditional"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Categories */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Explore Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/traditional" className="group relative block overflow-hidden rounded-xl shadow hover:shadow-lg">
            <img src="/images/traditional.jpg" alt="Traditional" className="w-full h-60 object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-bold">
              Traditional
            </div>
          </a>
          <a href="/western" className="group relative block overflow-hidden rounded-xl shadow hover:shadow-lg">
            <img src="/images/western.jpg" alt="Western" className="w-full h-60 object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-bold">
              Western
            </div>
          </a>
          <a href="/sale/under-999" className="group relative block overflow-hidden rounded-xl shadow hover:shadow-lg">
            <img src="/images/sale.jpg" alt="Sale" className="w-full h-60 object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-bold">
              Sale
            </div>
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">New Arrivals</h2>
        <ProductGrid />
      </section>
    </main>
  );
}

