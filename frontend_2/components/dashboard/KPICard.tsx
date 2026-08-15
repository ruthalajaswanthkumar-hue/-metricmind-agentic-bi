 "use client";
import { motion } from "framer-motion";

import KPICard from "./KPICard";

import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";

import { FaArrowTrendUp } from "react-icons/fa6";

type KPIGridProps = {
  revenue: number;
  profit: number;
  orders: number;
  customers: number;
};

export default function KPIGrid({
  revenue,
  profit,
  orders,
  customers,
}: KPIGridProps) {

   const kpiData = [
  {
    title: "Revenue",
    value: `₹${Number(revenue).toLocaleString()}`,
    icon: <FaDollarSign />,
    percentage: "+12%",
    trend: "Compared to last month",
  },
  {
    title: "Profit",
    value: `₹${Number(profit).toLocaleString()}`,
    icon: <FaArrowTrendUp />,
    percentage: "+8%",
    trend: "Compared to last month",
  },
  {
    title: "Orders",
    value: Number(orders).toLocaleString(),
    icon: <FaShoppingCart />,
    percentage: "+15%",
    trend: "Compared to last month",
  },
  {
    title: "Customers",
    value: Number(customers).toLocaleString(),
    icon: <FaUsers />,
    percentage: "+10%",
    trend: "Compared to last month",
  },
];

   

  return (

    <section className="mt-10">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
           Live Key Performance Indicators
        </h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Live overview of your business performance
        </p>

      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
      >

        {kpiData.map((item) => (

          <motion.div
            key={item.title}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
          >

            <KPICard
              title={item.title}
              value={item.value}
              icon={item.icon}
              percentage={item.percentage}
              trend={item.trend}
            />

          </motion.div>

        ))}

      </motion.div>

    </section>

  );

}
