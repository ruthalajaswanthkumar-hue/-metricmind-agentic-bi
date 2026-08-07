 "use client";

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

import RevenueChart from "../charts/RevenueChart";
import SalesChart from "../charts/SalesChart";
import RegionChart from "../charts/RegionChart";

interface AIResponseProps {
  dashboard: any;
}

export default function AIResponse({ dashboard }: AIResponseProps) {
  if (!dashboard) return null;

  // Backend response
  const response = dashboard.dashboard ?? {};

  const cards = response.dashboard?.cards ?? [];

  const chartData = response.chart_data ?? {
    bar: [],
    line: [],
    pie: [],
  };
  console.log("BAR:", chartData.bar);
  console.log("LINE:", chartData.line);
   console.log("PIE:", chartData.pie);

  const recommendedChart = response.recommended_chart ?? {};

  const insights = response.analytics?.insights ?? [];

  const recommendations =
    response.analytics?.recommendations ?? [];

  const rawData = response.analytics?.data ?? {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-5 flex items-start gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
        <FaRobot />
      </div>

      <div className="w-full rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-xl text-gray-900 dark:text-white">

        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
           Business Dashboard
        </h2>

        {/* KPI */}

        <div className="mb-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {cards.map((card: any, index: number) => (
            <div
              key={index}
              className="
rounded-xl
bg-gradient-to-br
from-blue-50
to-white
dark:from-slate-800
dark:to-slate-900
p-5
shadow-lg
border
border-gray-200
dark:border-slate-700
"
            >
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {card.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-blue-600 dark:text-cyan-400">
                {card.title === "Revenue" ||
                card.title === "Profit"
                  ? `₹ ${Number(card.value).toLocaleString()}`
                  : Number(card.value).toLocaleString()}
              </h2>
            </div>
          ))}
        </div>

        {/* Charts */}

        <div className="space-y-8 mb-10">

          <RevenueChart data={chartData.bar} />

          <SalesChart data={chartData.line} />

          <RegionChart data={chartData.pie} />

        </div>

        {/* Query */}

        {/* Query Result */}

<div className="mb-10">

  <h3 className="mb-5 text-xl font-bold">
    Query Result
  </h3>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

    {Object.entries(rawData).map(([key, value]) => (

      <div
        key={key}
        className="
        rounded-xl
        bg-blue-50
        dark:bg-slate-800
        p-5
        shadow
        "
      >

        <p className="text-gray-500 text-sm">
          {key}
        </p>

        <h2 className="mt-2 text-2xl font-bold text-blue-600">

          {typeof value === "number"

            ? value.toLocaleString()

            : String(value)}

        </h2>

      </div>

    ))}

  </div>

</div>

        {/* Insights */}

        <div className="mb-10">

          <h3 className="mb-3 text-xl font-bold">
             AI Insights
          </h3>

          <ul className="space-y-3">
            {insights.map((item: string, i: number) => (
              <li
                key={i}
                className="rounded-lg bg-white p-3 shadow dark:bg-slate-800"
              >
                {item}
              </li>
            ))}
          </ul>

        </div>

        {/* Recommendations */}

        <div>

          <h3 className="mb-3 text-xl font-bold">
             Recommendations
          </h3>

          <ul className="space-y-3">
            {recommendations.map((item: string, i: number) => (
              <li
                key={i}
                className="rounded-lg bg-white p-3 shadow dark:bg-slate-800"
              >
                {item}
              </li>
            ))}
          </ul>

        </div>

      </div>
    </motion.div>
  );
}
