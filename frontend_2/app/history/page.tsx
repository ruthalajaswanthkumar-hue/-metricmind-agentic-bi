"use client";

import { useState } from "react";
import HistoryCard from "@/components/history/HistoryCard";
import HistorySearch from "@/components/history/HistorySearch";

export default function HistoryPage() {
  const [history, setHistory] = useState([
    {
      id: 1,
      question: "Show Revenue",
      date: "26 Jul 2026",
    },
    {
      id: 2,
      question: "Show Profit",
      date: "25 Jul 2026",
    },
    {
      id: 3,
      question: "Best Selling Products",
      date: "24 Jul 2026",
    },
    {
      id: 4,
      question: "Monthly Sales",
      date: "23 Jul 2026",
    },
  ]);

  const [search, setSearch] = useState("");

  const deleteHistory = (id: number) => {
    setHistory((prevHistory) =>
      prevHistory.filter((item) => item.id !== id)
    );
  };

  const filteredHistory = history.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Query History
        </h1>

        <HistorySearch
          search={search}
          setSearch={setSearch}
        />

        <div className="space-y-4 mt-6">
          {filteredHistory.length === 0 ? (
            <p className="text-gray-500">
              No matching history found.
            </p>
          ) : (
            filteredHistory.map((item) => (
              <HistoryCard
                key={item.id}
                item={item}
                onDelete={deleteHistory}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}