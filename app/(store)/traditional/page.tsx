"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TraditionalPage() {
  const pathname = usePathname();

  const subPages = [
    { name: "Ethnic Dresses", path: "/store/traditional/ethnic-dresses" },
    { name: "Festive Edits", path: "/store/traditional/festive-edits" },
    { name: "Kurtas & Sets", path: "/store/traditional/kurtas-and-sets" },
  ];

  return (
    <div className="container mx-auto py-10 flex gap-6">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-100 p-4 rounded-md">
        <h2 className="font-semibold text-lg mb-4">Traditional Subpages</h2>
        <ul className="flex flex-col gap-2">
          {subPages.map((page) => (
            <li key={page.path}>
              <Link
                href={page.path}
                className={`block px-3 py-2 rounded-md ${
                  pathname === page.path
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-white p-6 rounded-md shadow">
        <h1 className="text-2xl font-semibold mb-4">Coming Soon</h1>
        <p className="text-gray-600">
          This section is under construction. Please check back later for all
          traditional collections.
        </p>
      </main>
    </div>
  );
}
