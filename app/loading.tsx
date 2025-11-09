"use client";

import { UserButton } from "@stackframe/stack";
import { BarChart2, Package, Plus, Settings } from "lucide-react";
import Link from "next/link";

// Sidebar component shown during loading
function LoadingSidebar() {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart2 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Add Product", href: "/add-product", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ];
  return (
    <div className="fixed left-0 top-0 bg-linear-to-br from-blue-500 to-purple-500 text-white w-71 min-h-screen p-6 z-10">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-10">
          <BarChart2 className="w-7 h-7" />
          <span className="text-lg font-semibold">Inventory Management</span>
        </div>

        <nav className="space-y-1">
          <div className="text-md font-semibold text-gray-800 uppercase">Inventory</div>
          {navigation.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                href={item.href}
                key={item.name}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-gray-800 text-gray-300"
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-md">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
}

// Default loading component used by the App Router while routes stream
export default function Loading() {
  return (
    <div className="relative min-h-screen">
      <LoadingSidebar />
      <div className="pl-71 min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-3 text-gray-600">
          <div className="h-7 w-7 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin" />
          <span className="text-base font-medium">Loading...</span>
        </div>
      </div>
    </div>
  );
}
