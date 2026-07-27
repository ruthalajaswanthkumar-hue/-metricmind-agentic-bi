import { FaBell, FaMoon, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">
        MetricMind
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <button className="text-gray-600 hover:text-blue-600">
          <FaMoon size={20} />
        </button>

        <button className="text-gray-600 hover:text-blue-600">
          <FaBell size={20} />
        </button>

        <div className="flex items-center gap-2">
          <FaUserCircle size={30} className="text-gray-700" />
          <span className="font-medium">Profile</span>
        </div>
      </div>
    </nav>
  );
}