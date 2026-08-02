"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaRocket } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-24">

      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-white/10 p-12 text-center backdrop-blur-xl shadow-2xl"
        >

          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-3xl text-white shadow-xl">
            <FaRocket />
          </div>

          <h2 className="text-5xl font-bold text-white">
            Ready to Transform
            <br />
            Your Business?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-300">
            Join thousands of businesses using MetricMind to
            monitor KPIs, generate AI insights, and make smarter,
            data-driven decisions every day.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl"
            >
              Start Analysis
              <FaArrowRight />
            </motion.button>

            <motion.button
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

          {/* Statistics */}

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                12K+
              </h3>

              <p className="mt-2 text-slate-300">
                Active Users
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-400">
                250K+
              </h3>

              <p className="mt-2 text-slate-300">
                Reports
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-400">
                98%
              </h3>

              <p className="mt-2 text-slate-300">
                AI Accuracy
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-400">
                24/7
              </h3>

              <p className="mt-2 text-slate-300">
                Support
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
