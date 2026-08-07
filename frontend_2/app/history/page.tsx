 "use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import HistoryCard from "@/components/history/HistoryCard";
import HistorySearch from "@/components/history/HistorySearch";

type HistoryItem = {
  id: number;
  question: string;
  sql: string;
  time: string;
};

export default function HistoryPage() {

  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadHistory() {

      try {

        const res = await fetch("http://127.0.0.1:8000/history");

        const data = await res.json();

        setHistory(data);

      } catch (err) {

        console.error("History API Error:", err);

      } finally {

        setLoading(false);

      }

    }

    loadHistory();

  }, []);

  function deleteHistory(id: number) {

    setHistory((prev) => prev.filter((item) => item.id !== id));

  }

  const filteredHistory = useMemo(() => {

    return history.filter((item) =>
      item.question.toLowerCase().includes(search.toLowerCase())
    );

  }, [history, search]);

  const totalQueries = history.length;

  const todayQueries = history.filter((item) => {

    if (!item.time) return false;

    const today = new Date().toISOString().slice(0, 10);

    return item.time.toString().startsWith(today);

  }).length;

  return (

    <main className="min-h-screen bg-gray-100 dark:bg-slate-950 p-5 sm:p-8">

      <motion.div

        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        className="mx-auto max-w-5xl"

      >

        <div className="mb-8">

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">

            Query History

          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">

            Previous AI queries executed in MetricMind.

          </p>

        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-md">

            <p className="text-sm text-gray-500">Total Queries</p>

            <h2 className="mt-2 text-3xl font-bold text-blue-600">

              {totalQueries}

            </h2>

          </div>

          <div className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-md">

            <p className="text-sm text-gray-500">Today's Queries</p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">

              {todayQueries}

            </h2>

          </div>

          <div className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-md">

            <p className="text-sm text-gray-500">Database</p>

            <h2 className="mt-2 text-3xl font-bold text-purple-600">

              SQLite

            </h2>

          </div>

        </div>

        <HistorySearch

          search={search}

          setSearch={setSearch}

        />

        <div className="mt-6 space-y-5">

          {loading ? (

            <div className="rounded-2xl bg-white dark:bg-slate-900 p-8 text-center">

              Loading history...

            </div>

          ) : filteredHistory.length === 0 ? (

            <div className="rounded-2xl bg-white dark:bg-slate-900 p-8 text-center text-gray-500">

              No history found.

            </div>

          ) : (

            filteredHistory.map((item: any) => (

              <HistoryCard

                key={item.id}

                item={{
                  id: item.id,
                  question: item.question,
                  answer: item.sql,
                  date: item.time,
                  category: "SQL",
                }}

                onDelete={deleteHistory}

              />

            ))

          )}

        </div>

      </motion.div>

    </main>

  );

}
