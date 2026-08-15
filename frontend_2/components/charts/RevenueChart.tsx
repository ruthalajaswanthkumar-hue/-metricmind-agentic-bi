  "use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface Props {
  data: any[];
}

export default function RevenueChart({ data }: Props) {
  if (!data || data.length === 0) {
    return (
      <div className="flex h-[320px] items-center justify-center rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
        <p className="text-gray-500 dark:text-gray-400">
          No revenue data available
        </p>
      </div>
    );
  }

  // Make sure revenue values are numbers
  const chartData = data
    .map((item) => ({
      month:
        item.month ??
        item.Month ??
        item.date ??
        item.Date ??
        "Unknown",
      revenue: Number(
        item.revenue ??
        item.Revenue ??
        item.total_revenue ??
        item.TotalRevenue ??
        0
      ),
    }))
    .filter((item) => !isNaN(item.revenue));

  if (chartData.length === 0) {
    return (
      <div className="flex h-[320px] items-center justify-center rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
        <p className="text-gray-500 dark:text-gray-400">
          No revenue data available
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            📈 Revenue Analysis
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Revenue performance over time
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
          Monthly
        </div>

      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 10,
            bottom: 10,
          }}
        >

          <defs>
            <linearGradient
              id="revenueGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopOpacity={0.45}
              />

              <stop
                offset="100%"
                stopOpacity={0.03}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            className="opacity-30"
          />

          <XAxis
            dataKey="month"
            tick={{
              fontSize: 12,
            }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tickFormatter={(value) =>
              `₹${(Number(value) / 1000).toFixed(0)}K`
            }
            tick={{
              fontSize: 12,
            }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            formatter={(value: any) =>
              `₹ ${Number(value).toLocaleString("en-IN")}`
            }
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
            labelStyle={{
              fontWeight: 600,
            }}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={3}
            fill="url(#revenueGradient)"
            dot={{
              r: 5,
              strokeWidth: 2,
            }}
            activeDot={{
              r: 7,
              strokeWidth: 3,
            }}
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}
