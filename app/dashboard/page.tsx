'use client';

import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/sign-in");
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  return (
    <main className="min-h-screen relative overflow-hidden font-sans">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{
          background: "linear-gradient(to bottom right, #b2ddf7, #e2d2ef)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay" />

      {/* Top bar */}
      <div className="relative z-10 flex justify-between items-center px-8 py-6">
        <div className="space-x-4 text-sm font-medium text-black">
          <Link href="/submit">Submit an Agent</Link>
          <Link href="/dashboard">My Dashboard</Link>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* Welcome */}
      <div className="relative z-10 text-center mt-8">
        <h1 className="text-4xl font-bold text-black">Howdy, {user?.firstName}! 👋</h1>
        <p className="mt-2 text-gray-700 text-sm">
          Welcome to your dashboard. This page is protected and only visible to you.
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto px-8">
        <Link href="/searchagents">
          <div className="cursor-pointer p-6 rounded-xl bg-white/60 backdrop-blur-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold">🔍 Search for Agents</h2>
            <p className="text-sm text-gray-700 mt-1">Find new AI tools to install and explore.</p>
          </div>
        </Link>

        <Link href="/myagents">
          <div className="cursor-pointer p-6 rounded-xl bg-white/60 backdrop-blur-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold">🤖 My Agents</h2>
            <p className="text-sm text-gray-700 mt-1">Manage the agents you’ve installed.</p>
          </div>
        </Link>

        <Link href="/memory">
          <div className="cursor-pointer p-6 rounded-xl bg-white/60 backdrop-blur-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold">🧠 Memory Bank</h2>
            <p className="text-sm text-gray-700 mt-1">Securely store files, context, and data.</p>
          </div>
        </Link>

        <Link href="/testagents">
          <div className="cursor-pointer p-6 rounded-xl bg-white/60 backdrop-blur-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold">🧪 Test Agents</h2>
            <p className="text-sm text-gray-700 mt-1">Try agents in a sandbox before installing.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
