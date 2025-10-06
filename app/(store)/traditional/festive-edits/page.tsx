export default function Page() {
  return (
    <section className="container flex flex-col items-center justify-center min-h-[70vh] text-center py-10 bg-gradient-to-b from-yellow-50 via-orange-50 to-pink-50 rounded-3xl">
      {/* Decorative Icon */}
      <div className="text-6xl mb-4 animate-bounce">🎉</div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
        Festive Collection Launching Soon
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-neutral-700 max-w-xl">
        We’re preparing something colorful and joyful just for you.
        Stay tuned for our upcoming festive edits!
      </p>

      {/* Call to Action */}
      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow hover:opacity-90 transition"
      >
        Back to Home
      </a>
    </section>
  );
}
