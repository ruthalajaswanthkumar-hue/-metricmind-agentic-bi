"use client";

import { useState } from "react";
import Link from "next/link";
import { FiBell, FiUser, FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  return (
    <div className="h-[60px] bg-gray-800 text-white flex justify-between items-center px-6">

      
      <h2 className="text-xl font-bold">MetricMind</h2>

      
      <div className="flex items-center gap-5">

        
        <span
          onClick={() => setDark(!dark)}
          className="cursor-pointer text-xl"
        >
          {dark ? <FiMoon /> : <FiSun />}
        </span>

        
        <FiBell className="text-xl cursor-pointer" />

        
        <FiUser className="text-xl cursor-pointer" />

       
        <Link href="/login">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md">
            Login
          </button>
        </Link>

      </div>
    </div>
  );
}