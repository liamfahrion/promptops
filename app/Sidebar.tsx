'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Agent Center', href: '/agent-center', icon: '🧠' },
  { label: 'Agent Trial/Demo Center', href: '/agent-demo', icon: '🧪' },
  { label: 'Prompt Management Hub', href: '/prompt-hub', icon: '📁' },
  { label: 'Prompt Clipboard', href: '/clipboard', icon: '📋' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-gray-900 text-white flex flex-col p-6 shadow-xl rounded-tr-2xl rounded-br-2xl">
      <div className="text-2xl font-bold mb-10 flex items-center space-x-2">
        <div className="w-6 h-6 rounded bg-indigo-500"></div>
        <span>PromptOps</span>
      </div>
      <nav className="flex flex-col space-y-3">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <span
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors duration-200 ${
                pathname === item.href ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
