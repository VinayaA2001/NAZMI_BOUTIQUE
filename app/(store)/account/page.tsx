export default function AccountPage() {
  // Later you can replace this with actual user authentication
  const isLoggedIn = false; 

  return (
    <section className="container py-10">
      <h1 className="text-2xl font-semibold mb-6">My Account</h1>

      {!isLoggedIn ? (
        <div className="space-y-4">
          <p className="text-neutral-600">Welcome! Please sign in or create an account to continue.</p>
          <div className="flex gap-4">
            <a
              href="/login"
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-neutral-800 transition"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="px-6 py-2 border border-black rounded-md hover:bg-neutral-100 transition"
            >
              Create Account
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-neutral-600">Hello, <strong>User</strong> 👋</p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700">
            <li><a href="/orders" className="hover:underline">My Orders</a></li>
            <li><a href="/wishlist" className="hover:underline">My Wishlist</a></li>
            <li><a href="/settings" className="hover:underline">Account Settings</a></li>
          </ul>
          <a
            href="/logout"
            className="inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Logout
          </a>
        </div>
      )}
    </section>
  );
}
