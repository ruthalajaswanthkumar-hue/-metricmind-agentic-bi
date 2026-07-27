import {
  FaChartBar,
  FaRobot,
  FaHistory,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-5">
      <ul className="space-y-6">
        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaChartBar />
          Dashboard
        </li>

        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaRobot />
          Ask AI
        </li>

        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaHistory />
          History
        </li>

        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaFileAlt />
          Reports
        </li>

        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaCog />
          Settings
        </li>
      </ul>
    </aside>
  );
}