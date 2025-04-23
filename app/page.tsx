'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs';

const words = [
  { text: 'Marketplace', color: '#0070f3' },
  { text: 'Trust Layer', color: '#10b981' },
  { text: 'Security', color: '#ef4444' },
  { text: 'Launchpad', color: '#f59e0b' },
  { text: 'Demo Center', color: '#8b5cf6' },
];

const offset = (i: number) => ((i * 997) % 40) - 20;

const letterVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    scale: 0.1,
    x: offset(i),
    y: offset(i + 42),
    filter: 'blur(6px)',
  }),
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 260, damping: 18 },
  },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const [slotW, setSlotW] = useState<number>();
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const measureRef = useRef<HTMLSpanElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (measureRef.current) {
      setSlotW(measureRef.current.getBoundingClientRect().width);
    }
  }, [index]);

  useEffect(() => {
    const moveGradient = (e: MouseEvent) => {
      if (bgRef.current) {
        const { clientX: x, clientY: y } = e;
        bgRef.current.style.background = `
          radial-gradient(800px at ${x}px ${y}px, rgba(255,255,255,0.35), transparent 80%),
          linear-gradient(to bottom right, #b2ddf7, #e2d2ef)
        `;
      }
    };
    window.addEventListener('mousemove', moveGradient);
    return () => window.removeEventListener('mousemove', moveGradient);
  }, []);

  const handleAsk = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: query }),
      });

      const data = await res.json();
      setResponse(data.answer || 'Sorry, Agentory didn’t respond.');
    } catch (err) {
      setResponse('Agentory is offline or something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAsk();
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{ background: 'linear-gradient(to bottom right, #b2ddf7, #e2d2ef)' }}
      />
      <div className="absolute inset-0 z-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay" />

      {/* Nav */}
      <nav className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-6 border-b border-white/20 text-base font-medium gap-4 sm:gap-0">
        <a href="/" className="text-xl font-semibold tracking-tight">
          Agentory
        </a>
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
          <a href="#browseagents" className="hover:underline">Browse Agents</a>
          <a href="submitanagent" className="hover:underline">Submit an Agent</a>
          <a href="#about" className="hover:underline">About</a>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <SignedOut>
            <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
              <div className="hover:underline text-sm cursor-pointer">Sign In</div>
            </SignInButton>
            <SignUpButton mode="redirect" forceRedirectUrl="/dashboard">
              <div className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition cursor-pointer">
                Get Started
              </div>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <a
              href="/dashboard"
              className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition cursor-pointer"
            >
              My Dashboard
            </a>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col justify-center items-center px-6 text-center pt-32 pb-10">
        <h1
          className="text-4xl sm:text-6xl font-semibold tracking-tight whitespace-nowrap drop-shadow-lg"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          <span className="mr-2">Your</span>
          <span
            className="relative inline-flex items-baseline text-center mx-[0.18em]"
            style={{ width: slotW, transition: 'width 600ms cubic-bezier(.25,.8,.5,1)' }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index].text}
                className="inline-flex items-baseline"
                style={{ color: words[index].color, fontStyle: 'italic', fontWeight: 600 }}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.02 } } }}
              >
                {words[index].text.split('').map((ch, i) =>
                  ch === ' ' ? (
                    <span key={i} style={{ display: 'inline-block', width: '0.25em' }}>
                      &nbsp;
                    </span>
                  ) : (
                    <motion.span key={i} custom={i} variants={letterVariants}>
                      {ch}
                    </motion.span>
                  )
                )}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="ml-2">for&nbsp;AI&nbsp;Tools</span>
          <span
            ref={measureRef}
            className="absolute opacity-0 pointer-events-none"
            style={{ visibility: 'hidden', whiteSpace: 'nowrap' }}
          >
            {words[index].text}
          </span>
        </h1>

        <p className="text-lg mt-6 text-gray-800 max-w-2xl mx-auto">
          Welcome to Agentory — the world’s first all-in-one AI agent marketplace, launchpad,
          memory bank, and trust layer.
        </p>
      </section>

      {/* LLM Box */}
      <section className="relative z-10 flex flex-col justify-center items-center px-4 pb-20">
        <div className="bg-white/30 backdrop-blur-xl shadow-xl rounded-xl px-6 py-8 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold text-center mb-4">Ask Agentory</h2>
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="What is Agentory?"
              className="w-full rounded-md border border-blue-200 px-4 py-3 pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
            <button
              onClick={handleAsk}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-900 transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {loading && <p className="mt-4 text-sm text-gray-500 italic">Thinking...</p>}

          {response && (
            <p className="mt-4 text-left text-gray-800 whitespace-pre-wrap">{response}</p>
          )}
        </div>
      </section>
    </main>
  );
}
