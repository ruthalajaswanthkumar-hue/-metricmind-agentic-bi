"use client";

import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        background: "#1f2937",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      {/* Logo */}
      <h2 style={{ fontWeight: "bold" }}>MetricMind</h2>

      {/* Right Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        
        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          {dark ? "🌙" : "☀️"}
        </button>

        {/* Notification */}
        <span style={{ cursor: "pointer" }}>🔔</span>

        {/* User Profile */}
        <span style={{ cursor: "pointer" }}>👤</span>
      </div>
    </div>
  );
}