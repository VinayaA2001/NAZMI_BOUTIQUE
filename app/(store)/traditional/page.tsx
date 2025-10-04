export default function Page() {
  return (
    <section className="container py-10">
      <h1 className="text-2xl font-semibold mb-6">Traditional</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Traditional Saree */}
        <div className="border rounded-lg p-4">
          <img src="/images/tradition saree.png" alt="Traditional Saree" className="w-full h-64 object-cover rounded-md" />
          <h2 className="mt-2 font-semibold">Traditional Saree</h2>
          <p>₹1299</p>
          <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to Cart</button>
        </div>

        {/* Western Dress */}
        <div className="border rounded-lg p-4">
          <img src="/images/churidhar2.png" alt="Western Dress" className="w-full h-64 object-cover rounded-md" />
          <h2 className="mt-2 font-semibold">Western Dress</h2>
          <p>₹999</p>
          <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to Cart</button>
        </div>

        {/* Kurta Set */}
        <div className="border rounded-lg p-4">
          <img src="/images/churidhar3.png" alt="Kurta Set" className="w-full h-64 object-cover rounded-md" />
          <h2 className="mt-2 font-semibold">Kurta Set</h2>
          <p>₹1499</p>
          <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}