"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
];

export default function RegionChart({ data }: any) {
  if (!data || data.length === 0) return null;

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg">

      <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
        🥧 Business Distribution
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >
            {data.map((_: any, index: number) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value: number) =>
              value.toLocaleString()
            }
            contentStyle={{
              borderRadius: 12,
            }}
          />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}
