import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/ThemeProvider";
import Layout from "@/components/layout/Layout";


export const metadata: Metadata = {
  title: "MetricMind",
  description: "AI Powered Business Intelligence",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>

      <body>

        <ThemeProvider>

          <Layout>
            {children}
          </Layout>

        </ThemeProvider>

      </body>

    </html>
  );
}
