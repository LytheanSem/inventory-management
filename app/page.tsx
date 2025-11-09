import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black to-blue-500 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="border-2 border-blue-500 border-solid rounded-lg p-4 text-5xl font-bold text-white mb-6">
            Inventory Management System
          </h1>
          <p className="text-xl text-white-600 mb-8 max-w-2xl mx-auto">Track and manage your inventory with ease.</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/sign-in"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
