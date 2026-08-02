"use client";

import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaRobot,
  FaChartLine,
  FaDownload,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaChartLine />,
    title: "Revenue Updated",
    time: "10 mins ago",
    color: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300",
  },
  {
    icon: <FaRobot />,
    title: "AI Generated Business Report",
    time: "25 mins ago",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300",
  },
  {
    icon: <FaDownload />,
    title: "Sales Report Exported",
    time: "1 hour ago",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    icon: <FaFileAlt />,
    title: "Monthly Report Created",
    time: "Today",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300",
  },
];

export default function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 p-6"
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            className="flex items-center gap-4"
          >
            <div
              className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.color}`}
            >
              {item.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
