// File: /app/page.tsx
import Sidebar from './Sidebar';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 flex flex-col items-start justify-center px-20">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Welcome to PromptOps</h1>
        <p className="text-xl text-gray-500">Enterprise-grade infrastructure for AI prompts and agents</p>
      </main>
    </div>
  );
}