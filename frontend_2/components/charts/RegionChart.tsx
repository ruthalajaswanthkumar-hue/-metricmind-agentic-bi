"use client";

import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { FaGlobeAsia } from "react-icons/fa";

interface RegionChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

const COLORS = [
  "#3B82F6", // Blue
  "#10B981", // Green
  "#F59E0B", // Orange
  "#8B5CF6", // Purple
];

export default function RegionChart({
  data,
}: RegionChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl p-6"
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
            <FaGlobeAsia size={22} />
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest font-semibold text-blue-600">
              Regional Analytics
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sales Distribution
            </h2>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
            animationDuration={1800}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: 16,
              border: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          />

          <Legend
            verticalAlign="bottom"
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
