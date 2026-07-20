import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-24 px-6">
      <h1 className="text-5xl font-bold mb-4">MetricMind</h1>

      <p className="text-xl text-gray-300 mb-4">
        AI Powered Business Intelligence
      </p>

      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Transform your business data into meaningful insights using AI-powered analytics.
      </p>

      <Link href="/login">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg transition">
          Start Analysis
        </button>
      </Link>
    </section>
  );
}