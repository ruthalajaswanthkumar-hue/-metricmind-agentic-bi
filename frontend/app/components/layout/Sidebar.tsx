export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-950 text-white p-6">
      <h2 className="text-xl font-bold mb-8">MetricMind</h2>

      <ul className="space-y-4 text-gray-300">
        <li className="hover:text-white cursor-pointer">Dashboard</li>
        <li className="hover:text-white cursor-pointer">Ask AI</li>
        <li className="hover:text-white cursor-pointer">History</li>
        <li className="hover:text-white cursor-pointer">Reports</li>
        <li className="hover:text-white cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}