  "use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/layout/Layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const logged = localStorage.getItem("isLoggedIn");

    if (logged !== "true") {
      router.replace("/login");
      return;
    }

    setChecking(false);
  }, [router]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />

          <p className="mt-4 text-sm text-slate-400">
            Loading MetricMind...
          </p>
        </div>
      </div>
    );
  }

  return <Layout>{children}</Layout>;
}
