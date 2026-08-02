"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Temporary login success
    router.push("/dashboard");
  };


  return (
    <form 
      onSubmit={handleLogin}
      className="space-y-5"
    >

      <div>
        <label className="block text-gray-700 mb-2">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg text-black"
        />
      </div>


      <div>
        <label className="block text-gray-700 mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg text-black"
        />
      </div>


      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
      >
        Login
      </button>


    </form>
  );
}
