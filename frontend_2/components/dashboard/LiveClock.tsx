"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const currentDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/20 bg-white/20 p-5 text-white backdrop-blur-lg shadow-lg"
    >
      <div className="flex items-center gap-2 text-blue-100">
        <FaClock />
        <span className="text-sm font-medium">Live Time</span>
      </div>

      <div className="mt-3 text-2xl font-bold tracking-wide">
        {currentTime}
      </div>

      <div className="mt-1 text-sm text-blue-100">
        {currentDate}
      </div>
    </motion.div>
  );
}
