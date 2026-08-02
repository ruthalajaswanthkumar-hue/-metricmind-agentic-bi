"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaChartLine size={28} />,
    value: "250K+",
    label: "Reports Generated",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaUsers size={28} />,
    value: "12K+",
    label: "Active Users",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaDatabase size={28} />,
    value: "1M+",
    label: "Records Processed",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: <FaBrain size={28} />,
    value: "98%",
    label: "AI Accuracy",
    color: "from-purple-500 to-pink-500",
  },
];

export default function About() {
  return (
    <section className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              WHY CHOOSE METRICMIND
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              AI That Turns
              <br />
              Business Data
              <br />
              Into Smart Decisions
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600 dark:text-gray-400">
              MetricMind combines Artificial Intelligence,
              interactive dashboards, business reports, and
              predictive analytics into one powerful platform.
              Make confident decisions using real-time insights
              and beautiful visualizations.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  AI-Powered Recommendations
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Interactive Business Dashboards
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Real-Time KPI Monitoring
                </span>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-lg dark:border-gray-700 dark:bg-slate-800"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white`}
                >
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
