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
    return null;
  }

  return (
    <main className="min-h-screen relative overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 transition-all duration-1000" style={{ background: "linear-gradient(to bottom right, #b2ddf7, #e2d2ef)" }} />
      <div className="absolute inset-0 z-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay" />

      {/* Top bar */}
      <div className="relative z-10 flex flex-wrap justify-between items-center px-4 sm:px-8 py-6 text-sm font-medium text-black gap-4">
        <div className="flex flex-wrap gap-4">
          <Link href="/submit">Submit an Agent</Link>
          <Link href="/dashboard">My Dashboard</Link>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* Welcome */}
      <div className="relative z-10 text-center mt-8 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">Howdy, {user?.firstName}! 👋</h1>
        <p className="mt-2 text-gray-700 text-sm max-w-xl mx-auto">
          Welcome to your dashboard. This page is protected and only visible to you.
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto px-4 sm:px-8">
        <Link href="/searchagents">
          <div className="cursor-pointer p-6 rounded-xl bg-white/60 backdrop-blur-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold">🔍 Search for Agents</h2>
            <p className="text-sm text-gray-700 mt-1">Find the agents you need.</p>
          </div>
        </Link>

        {["🤖 My Agents", "🧠 Memory Bank", "🧪 Test Agents"].map((title, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl bg-white/60 backdrop-blur-lg shadow-md text-center text-gray-500"
          >
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl z-10 flex flex-col items-center justify-center pointer-events-none">
              <div className="text-sm font-medium">🎉 Coming Soon</div>
            </div>
            <div className="relative z-0">
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="text-sm mt-1">
                {title === "🤖 My Agents"
                  ? "Manage the agents you’ve installed."
                  : title === "🧠 Memory Bank"
                  ? "Securely store files, context, and data."
                  : "Try agents in a sandbox before installing."}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-6 max-w-md mx-auto px-4 sm:px-8">
        <div className="relative p-6 rounded-xl bg-white/60 backdrop-blur-lg shadow-md text-center text-gray-500">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl z-10 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-sm font-medium">🎉 Coming Soon</div>
          </div>
          <div className="relative z-0">
            <h2 className="text-lg font-semibold">🛠️ Make Your Own Agent</h2>
            <p className="text-sm mt-1">Design and deploy your own custom AI agent.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
