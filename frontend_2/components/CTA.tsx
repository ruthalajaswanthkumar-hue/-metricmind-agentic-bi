  "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaRocket, FaTimes, FaCalendarAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();
  const [showDemo, setShowDemo] = useState(false);

  const handleStartAnalysis = () => {
    router.push("/login");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-24">

      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-white/10 p-12 text-center shadow-2xl backdrop-blur-xl"
        >

          {/* Icon */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-3xl text-white shadow-xl">
            <FaRocket />
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-bold text-white">
            Ready to Transform
            <br />
            Your Business?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-300">
            Join thousands of businesses using MetricMind to
            monitor KPIs, generate AI insights, and make smarter,
            data-driven decisions every day.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">

            {/* Start Analysis */}
            <motion.button
              type="button"
              onClick={handleStartAnalysis}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-shadow hover:shadow-blue-500/30"
            >
              Start Analysis
              <FaArrowRight />
            </motion.button>

            {/* Schedule Demo */}
            <motion.button
              type="button"
              onClick={() => setShowDemo(true)}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Schedule Demo
            </motion.button>

          </div>

          {/* Platform Capabilities */}

<div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

  <div>
    <h3 className="text-4xl font-bold text-cyan-400">
      AI
    </h3>

    <p className="mt-2 text-slate-300">
      Data Insights
    </p>
  </div>

  <div>
    <h3 className="text-4xl font-bold text-green-400">
      KPI
    </h3>

    <p className="mt-2 text-slate-300">
      Monitoring
    </p>
  </div>

  <div>
    <h3 className="text-4xl font-bold text-orange-400">
      SQL
    </h3>

    <p className="mt-2 text-slate-300">
      Data Analysis
    </p>
  </div>

  <div>
    <h3 className="text-4xl font-bold text-purple-400">
      Live
    </h3>

    <p className="mt-2 text-slate-300">
      Dashboards
    </p>
  </div>

</div>

        </motion.div>
      </div>

      {/* Schedule Demo Modal */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
            onClick={() => setShowDemo(false)}
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-2xl"
            >

              {/* Close */}
              <button
                type="button"
                onClick={() => setShowDemo(false)}
                className="absolute right-5 top-5 text-slate-400 transition hover:text-white"
              >
                <FaTimes size={20} />
              </button>

              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400">
                <FaCalendarAlt size={28} />
              </div>

              <h3 className="text-3xl font-bold text-white">
                Schedule a Demo
              </h3>

              <p className="mt-3 text-slate-400">
                See how MetricMind can turn your business data into
                actionable insights.
              </p>

              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Demo request submitted!");
                  setShowDemo(false);
                }}
                className="mt-7 space-y-4"
              >

                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                />

                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 font-semibold text-white transition hover:opacity-90"
                >
                  Request Demo
                </button>

              </form>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
