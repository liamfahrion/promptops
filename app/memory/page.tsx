import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import MemoryUpload from "../components/MemoryUpload";

export default async function MemoryBank() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen font-sans relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{
          background: "linear-gradient(to bottom right, #b2ddf7, #e2d2ef)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay" />

      {/* Top Bar */}
      <div className="relative z-10 flex justify-between items-center px-8 py-6">
        <div className="flex gap-6 text-sm font-medium text-gray-800">
          <a href="/submitanagent" className="hover:underline">
            Submit an Agent
          </a>
          <a href="/dashboard" className="hover:underline">
            My Dashboard
          </a>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* Memory Content */}
      <section className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 drop-shadow-sm">
          🧠 Memory Bank
        </h1>
        <p className="text-lg text-gray-800 mb-12 max-w-2xl">
          Store and manage files with agent-specific access controls.
        </p>

        <div className="w-full max-w-3xl px-4 space-y-6">
          <MemoryUpload />
          <p className="text-gray-700 text-center">No memory fields uploaded yet.</p>
        </div>
      </section>
    </main>
  );
}
