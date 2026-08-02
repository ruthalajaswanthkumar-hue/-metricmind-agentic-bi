"use client";

import { motion } from "framer-motion";
import {
  FaArrowTrendUp,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa6";

const insights = [
  {
    icon: <FaChartLine />,
    title: "Revenue Growth",
    description: "Revenue has increased by 18% compared to last month.",
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/40",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Best Performing Region",
    description: "East region generated the highest sales this week.",
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/40",
  },
  {
    icon: <FaLightbulb />,
    title: "AI Recommendation",
    description:
      "Offer a weekend promotion to increase customer retention.",
    color: "text-yellow-600",
    bg: "bg-yellow-100 dark:bg-yellow-900/40",
  },
];

export default function AIInsight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 p-6 h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xl">
          🤖
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            AI Insights
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Smart recommendations powered by AI
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {insights.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
            }}
            className="flex gap-4 rounded-2xl p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${item.bg} ${item.color}`}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
