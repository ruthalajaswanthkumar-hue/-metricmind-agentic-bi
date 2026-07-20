"use client";

import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaDatabase } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen">

      
      <section className="text-center py-24 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-6xl font-bold mb-4"
        >
          MetricMind
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-300 mb-6"
        >
          AI Powered Business Intelligence
        </motion.p>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto text-gray-400 mb-8"
        >
          Turn raw data into actionable insights with AI-driven analytics. 
          Make faster, smarter business decisions with MetricMind.
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg shadow-lg"
        >
          Start Analysis
        </motion.button>
      </section>

      
      <section className="py-20 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg text-center"
          >
            <FaRobot className="text-4xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
            <p className="text-gray-400">
              Instantly generate intelligent insights from your data.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg text-center"
          >
            <FaChartLine className="text-4xl mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Visual Analytics</h3>
            <p className="text-gray-400">
              Interactive dashboards and charts for better decisions.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg text-center"
          >
            <FaDatabase className="text-4xl mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Data Management</h3>
            <p className="text-gray-400">
              Organize and manage large datasets effortlessly.
            </p>
          </motion.div>

        </div>
      </section>

      
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          About MetricMind
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
          MetricMind is a next-generation AI-powered business intelligence platform 
          that helps companies analyze, visualize, and understand their data with ease. 
          Built for speed, clarity, and smarter decision-making.
        </p>
      </section>

      
      <footer className="text-center py-6 bg-black text-gray-500">
        © 2026 MetricMind. Built using Next.js
      </footer>

    </div>
  );
}