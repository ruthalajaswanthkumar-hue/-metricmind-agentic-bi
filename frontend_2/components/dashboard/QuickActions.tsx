"use client";

import { motion } from "framer-motion";
import {
  FaPlus,
  FaRobot,
  FaDownload,
  FaSyncAlt,
} from "react-icons/fa";

const actions = [
  {
    title: "New Report",
    icon: <FaPlus />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Ask AI",
    icon: <FaRobot />,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Export Data",
    icon: <FaDownload />,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Refresh",
    icon: <FaSyncAlt />,
    color: "from-orange-500 to-red-500",
  },
];

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg p-6"
    >
      <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className={`rounded-2xl bg-gradient-to-r ${action.color} p-5 text-white shadow-lg transition`}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="text-3xl">
                {action.icon}
              </div>

              <p className="text-sm font-semibold">
                {action.title}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
