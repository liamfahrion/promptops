'use client';

import { useState, useMemo, useEffect } from 'react';
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Fuse from 'fuse.js';
import { agents as mockAgents } from './full_mock_agents';

const useCases = [
  'All',
  'Knowledge Management',
  'Document Summarization',
  'Email Automation',
  'Data Analysis',
  'Customer Support',
  'Meeting Productivity',
];

const fuseOptions = {
  keys: [
    { name: 'name', weight: 0.5 },
    { name: 'description', weight: 0.3 },
    { name: 'details', weight: 0.7 },
  ],
  threshold: 0.35,
  includeScore: true,
  ignoreLocation: true,
};

export default function SearchAgentsPage() {
  const [searchMode, setSearchMode] = useState<'standard' | 'ai'>('standard');
  const [search, setSearch] = useState('');
  const [aiSearchInput, setAiSearchInput] = useState('');
  const [aiSearch, setAiSearch] = useState('');
  const [aiResults, setAiResults] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fuse = useMemo(() => new Fuse(mockAgents, fuseOptions), []);
  const fuseResults = search.trim()
    ? fuse.search(search).map((res) => res.item)
    : mockAgents;

  const filtered = fuseResults.filter(
    (agent) => selectedCategory === 'All' || agent.category === selectedCategory
  );

  useEffect(() => {
    if (!aiSearch.trim()) return;

    setLoading(true);
    fetch('/api/toolsearch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: aiSearch }),
    })
      .then(async (res) => {
        const data = await res.json();

        const enriched = (data.content || []).map((r: any) => {
          const full = mockAgents.find((a) => a.name.toLowerCase() === r.name?.toLowerCase());
          return full ? { ...full, ...r } : { ...r, price: r.price || 'Unknown', paymentType: r.paymentType || 'Unknown', link: r.link || '', description: r.description || '', category: r.category || '', details: r.details || r.why || '' };
        });

        setAiResults(enriched);
      })
      .catch((err) => {
        console.error('AI search failed:', err);
        setAiResults([]);
      })
      .finally(() => setLoading(false));
  }, [aiSearch]);

  const displayAgents = searchMode === 'ai' && aiSearch.trim() ? aiResults : filtered;

  return (
    <div className="min-h-screen relative flex flex-col lg:flex-row text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="absolute inset-0 z-0 transition-all duration-1000" style={{ background: 'linear-gradient(to bottom right, #b2ddf7, #e2d2ef)' }} />
      <div className="absolute inset-0 z-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay" />

      <aside className="relative z-10 w-full lg:w-64 bg-white/70 backdrop-blur-md border-b lg:border-b-0 lg:border-r border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Use Cases</h2>
        <div className="grid grid-cols-2 lg:block gap-2">
          {useCases.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-left px-4 py-2 rounded-lg transition text-sm ${
                selectedCategory === cat ? 'bg-black text-white' : 'hover:bg-gray-100 text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      <main className="relative z-10 flex-1 p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">🔍 Search for Agents</h1>
          <Link
            href="/dashboard"
            className="px-4 py-1 rounded-md bg-black text-white font-medium text-sm hover:bg-gray-900 transition"
          >
            My Dashboard
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full font-medium transition border text-sm ${
              searchMode === 'standard'
                ? 'bg-black text-white border-black'
                : 'bg-white/70 text-black border-gray-300 hover:bg-white'
            }`}
            onClick={() => setSearchMode('standard')}
          >
            Standard Search
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition border text-sm ${
              searchMode === 'ai'
                ? 'bg-black text-white border-black'
                : 'bg-white/70 text-black border-gray-300 hover:bg-white'
            }`}
            onClick={() => setSearchMode('ai')}
          >
            AI Tool Finder
          </button>
        </div>

        {searchMode === 'standard' ? (
          <input
            type="text"
            placeholder="Search by name, description, or details..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-10 px-4 py-2 border border-gray-300 rounded-lg w-full bg-white/80 backdrop-blur-md"
          />
        ) : (
          <input
            type="text"
            placeholder="e.g. I need something to transcribe calls"
            value={aiSearchInput}
            onChange={(e) => setAiSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setAiSearch(aiSearchInput);
              }
            }}
            className="mb-10 px-4 py-2 border border-blue-300 rounded-lg w-full bg-white/80 backdrop-blur-md"
          />
        )}

        <div className="space-y-4">
          {loading && <p className="text-gray-500 italic">🤖 Thinking…</p>}

          {!loading && displayAgents.map((agent) => {
            const agentKey = agent.slug ?? agent.name;

            return (
              <div
                key={agentKey}
                className="bg-white/60 backdrop-blur-lg rounded-xl shadow-md p-4 transition hover:shadow-lg"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setExpanded((prev) => (prev === agentKey ? null : agentKey))}
                >
                  <div>
                    <h2 className="text-lg font-semibold text-black">{agent.name}</h2>
                    <p className="text-sm text-gray-700">{agent.description}</p>
                    {agent.why && <p className="text-xs italic text-gray-600 mt-1">{agent.why}</p>}
                  </div>
                  {expanded === agentKey ? (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                {expanded === agentKey && (
                  <div className="mt-4 text-sm text-gray-800 border-t pt-3 space-y-2">
                    <p>{agent.details ?? agent.why ?? 'No additional information available.'}</p>
                    {agent.price && <p><strong>Price:</strong> {agent.price}</p>}
                    {agent.paymentType && <p><strong>Payment Type:</strong> {agent.paymentType}</p>}
                    {agent.link && (
                      <p>
                        <strong>Website:</strong>{' '}
                        <a
                          href={agent.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline inline-flex items-center"
                        >
                          {agent.link} <ExternalLink className="ml-1 w-3 h-3" />
                        </a>
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {!loading && displayAgents.length === 0 && (
            <p className="text-gray-500">No agents found.</p>
          )}
        </div>
      </main>
    </div>
  );
}