"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaChartLine,
  FaFileAlt,
  FaTachometerAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={32} />,
    title: "AI Analytics",
    description:
      "Generate intelligent insights and predictions using AI-powered analytics.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Interactive Charts",
    description:
      "Visualize business performance with beautiful real-time charts.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaFileAlt size={32} />,
    title: "Smart Reports",
    description:
      "Create detailed business reports with one click and export them easily.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: <FaTachometerAlt size={32} />,
    title: "Live Dashboard",
    description:
      "Monitor KPIs, revenue, sales, and customer growth from one place.",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Features() {
  return (
    <section
  id="features"
  className="bg-slate-50 py-24 dark:bg-slate-950"
>

      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900 dark:text-white">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            MetricMind combines AI, business intelligence, dashboards,
            and reporting into one powerful platform.
          </p>

        </motion.div>

        {/* Feature Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-slate-900"
            >

              <div
                className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg`}
              >
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="leading-8 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
