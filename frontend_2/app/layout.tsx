import type { Metadata } from "next";
import "./globals.css";

import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "MetricMind",
  description: "AI Powered Business Intelligence Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
