"use client";

import ProfileCard from "@/components/settings/ProfileCard";
import ThemeToggle from "@/components/settings/ThemeToggle";
import NotificationSettings from "@/components/settings/NotificationSettings";
import LogoutButton from "@/components/settings/LogoutButton";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-black-100 p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>

        <ProfileCard />
        <ThemeToggle />
        <NotificationSettings />
        <LogoutButton />
      </div>
    </main>
  );
}