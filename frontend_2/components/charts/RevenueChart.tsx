 "use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

interface Props {
  data: any[];
}

export default function RevenueChart({ data }: Props) {
  if (!data || data.length === 0) return null;

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg">

      <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
        📊 Revenue Analysis
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip
            formatter={(value: number) =>
              `₹ ${value.toLocaleString()}`
            }
            contentStyle={{
              borderRadius: 12,
            }}
          />

          <Bar
            dataKey="revenue"
            fill="#cb64c4"
            radius={[8, 8, 0, 0]}
          >
            <LabelList
              dataKey="revenue"
              position="top"
              formatter={(value: number) =>
                `₹${(value / 100000).toFixed(1)}L`
              }
            />
          </Bar>

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}
