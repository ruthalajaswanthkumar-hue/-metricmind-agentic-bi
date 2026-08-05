 "use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function SalesChart({ data }: any) {
  if (!data || data.length === 0) return null;

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg">

      <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
        📈 Sales Trend
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip
            formatter={(value: number) =>
              value.toLocaleString()
            }
            contentStyle={{
              borderRadius: 12,
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#22C55E"
            strokeWidth={4}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}
