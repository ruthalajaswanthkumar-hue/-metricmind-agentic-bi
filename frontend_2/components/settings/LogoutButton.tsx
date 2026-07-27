"use client";

import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
  const handleLogout = () => {
    alert("Logout clicked");
  };

  return (
    <div className="bg-blue-100 rounded-xl shadow-lg p-6">
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        <FiLogOut size={20} />
        Logout
      </button>
    </div>
  );
}