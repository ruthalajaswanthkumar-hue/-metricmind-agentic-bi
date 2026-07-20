"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md text-white">

        
        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 rounded-lg bg-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mb-4 p-3 rounded-lg bg-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        
        <div className="flex justify-between items-center mb-6 text-sm">
          <label className="flex items-center gap-2 text-gray-300">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            Remember Me
          </label>

          <a href="#" className="text-blue-400 hover:underline">
            Forgot Password?
          </a>
        </div>

        
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold"
        >
          Login
        </button>

      </div>
    </div>
  );
}