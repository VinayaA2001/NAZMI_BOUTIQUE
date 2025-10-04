"use client";
import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Later: connect this to your product API or search logic
    console.log("Searching for:", query);
  };

  return (
    <section className="container py-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Search Products</h1>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for traditional, western, or sale items..."
          className="flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-black/20"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-neutral-800 transition"
        >
          Search
        </button>
      </form>

      {/* Results Placeholder */}
      {query ? (
        <div className="text-neutral-600">
          <p>Showing results for: <span className="font-medium">{query}</span></p>
          <div className="mt-4 text-sm text-neutral-500">
            (No products connected yet — you can hook this into your product grid)
          </div>
        </div>
      ) : (
        <p className="text-neutral-500">Start typing to search products...</p>
      )}
    </section>
  );
}
