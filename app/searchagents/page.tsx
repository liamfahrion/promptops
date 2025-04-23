'use client';

import { useState, useMemo, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Fuse from 'fuse.js';

const useCases = [
  'All',
  'Knowledge Management',
  'Document Summarization',
  'Email Automation',
  'Data Analysis',
  'Customer Support',
  'Meeting Productivity'
];

const mockAgents = [
  {
    name: 'Trendai 1',
    slug: 'trendai-1',
    description: 'Trend analysis tool for enhanced data workflows.',
    category: 'Data Analysis',
    details:
      'Trendai 1 is a specialized agent that leverages AI to handle trend analysis tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.'
  },
  {
    name: 'Ticketai 2',
    slug: 'ticketai-2',
    description: 'Ticket tagging tool for enhanced support workflows.',
    category: 'Customer Support',
    details:
      'Ticketai 2 is a specialized agent that leverages AI to handle ticket tagging tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.'
  },
  {
    name: 'Storyai 3',
    slug: 'storyai-3',
    description: 'Story brainstorming tool for enhanced writing workflows.',
    category: 'Knowledge Management',
    details:
      'Storyai 3 is a specialized agent that leverages AI to handle story brainstorming tasks. It streamlines writing processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.'
  }
];

const fuseOptions = {
  keys: [
    { name: 'name', weight: 0.5 },
    { name: 'description', weight: 0.3 },
    { name: 'details', weight: 0.7 }
  ],
  threshold: 0.35,
  includeScore: true,
  ignoreLocation: true
};

export default function SearchAgentsPage() {
  const [search, setSearch] = useState('');
  const [aiSearchInput, setAiSearchInput] = useState('');
  const [aiSearch, setAiSearch] = useState('');
  const [aiResults, setAiResults] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const fuse = useMemo(() => new Fuse(mockAgents, fuseOptions), []);
  const fuseResults = search.trim()
    ? fuse.search(search).map((res) => res.item)
    : mockAgents;

  const filtered = fuseResults.filter(
    (agent) => selectedCategory === 'All' || agent.category === selectedCategory
  );

  useEffect(() => {
    if (!aiSearch.trim()) return;

    fetch('/api/toolsearch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: aiSearch })
    })
      .then(async (res) => {
        const data = await res.json();
        setAiResults(data.content || []);
      })
      .catch(() => setAiResults([]));
  }, [aiSearch]);

  return (
    <div className="min-h-screen relative flex font-sans text-gray-900">
      <div
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{ background: 'linear-gradient(to bottom right, #b2ddf7, #e2d2ef)' }}
      />
      <div className="absolute inset-0 z-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay" />

      <aside className="relative z-10 w-64 min-h-screen bg-white/70 backdrop-blur-md border-r border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Use Cases</h2>
        <div className="space-y-2">
          {useCases.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                selectedCategory === cat ? 'bg-black text-white' : 'hover:bg-gray-100 text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      <main className="relative z-10 flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8 text-black">🔍 Search for Agents</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-10 items-start md:items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Standard Search</label>
            <input
              type="text"
              placeholder="Search by name, description, or details..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg w-full bg-white/80 backdrop-blur-md"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Or Use AI Tool Finder</label>
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
              className="px-4 py-2 border border-blue-300 rounded-lg w-full bg-white/80 backdrop-blur-md"
            />
          </div>
        </div>

        <div className="space-y-4">
          {(aiSearch.trim() ? aiResults : filtered).map((agent) => (
            <div
              key={agent.slug || agent.name}
              className="bg-white/60 backdrop-blur-lg rounded-xl shadow-md p-4 transition hover:shadow-lg"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() =>
                  setExpanded((prev) => (prev === (agent.slug || agent.name) ? null : agent.slug || agent.name))
                }
              >
                <div>
                  <h2 className="text-lg font-semibold text-black">{agent.name}</h2>
                  <p className="text-sm text-gray-700">{agent.description}</p>
                  {agent.why && <p className="text-xs text-gray-600 italic mt-1">{agent.why}</p>}
                </div>
                {expanded === (agent.slug || agent.name) ? (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {expanded === (agent.slug || agent.name) && agent.details && (
                <div className="mt-4 text-sm text-gray-800 border-t pt-3">
                  <p>{agent.details}</p>
                </div>
              )}
            </div>
          ))}

          {(aiSearch.trim() ? aiResults : filtered).length === 0 && (
            <p className="text-gray-500">No agents found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
