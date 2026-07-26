"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("System");

  return (
    <div className="bg-blue-100 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        Theme
      </h2>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="border rounded-lg p-2 w-full"
      >
        <option>Light</option>
        <option>Dark</option>
        <option>System</option>
      </select>
    </div>
  );
}