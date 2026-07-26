"use client";

import { useState } from "react";

export default function NotificationSettings() {
  const [email, setEmail] = useState(true);
  const [app, setApp] = useState(false);

  return (
    <div className="bg-blue-50 shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">
        Notifications
      </h2>

      <div className="flex justify-between items-center mb-4">
        <span>Email Notifications</span>

        <input
          type="checkbox"
          checked={email}
          onChange={() => setEmail(!email)}
        />
      </div>

      <div className="flex justify-between items-center">
        <span>App Notifications</span>

        <input
          type="checkbox"
          checked={app}
          onChange={() => setApp(!app)}
        />
      </div>
    </div>
  );
}