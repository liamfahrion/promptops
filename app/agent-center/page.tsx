import Sidebar from '../Sidebar';

export default function AgentCenter() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col items-start justify-center px-20">
        <h1 className="text-3xl font-bold">Agent Command Center</h1>
        <p className="text-gray-600 mt-2">View and manage all deployed AI agents.</p>
      </main>
    </div>
  );
}
