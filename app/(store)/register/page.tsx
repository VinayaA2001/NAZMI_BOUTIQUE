export default function RegisterPage() {
  return (
    <section className="container py-10 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Create Account</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-black/20"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-black/20"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-black/20"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-black text-white rounded-md hover:bg-neutral-800 transition"
        >
          Create Account
        </button>
      </form>

      <p className="mt-4 text-sm text-neutral-600 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-black hover:underline">
          Sign in
        </a>
      </p>
    </section>
  );
}
