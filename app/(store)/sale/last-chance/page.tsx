export default function Page() {
  return (
    <section className="container flex flex-col items-center justify-center min-h-[70vh] text-center py-10">
      {/* Decorative Icon */}
      <div className="text-6xl mb-4">🚀</div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
        Something Awesome is Coming Soon
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-neutral-600 max-w-xl">
        We’re working on an exciting new experience. Stay tuned!
      </p>

      {/* Action Button */}
      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg shadow hover:opacity-90 transition"
      >
        Back to Home
      </a>
    </section>
  );
}
