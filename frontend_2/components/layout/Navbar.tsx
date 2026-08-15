  "use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-gradient-to-r
        from-slate-950/95
        via-blue-950/95
        to-indigo-950/95
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >
        {/* LOGO */}

        <button
          onClick={() => router.push("/")}
          className="text-2xl font-extrabold tracking-tight"
        >
          <span className="text-white">Metric</span>
          <span className="text-cyan-400">Mind</span>
        </button>

        {/* NAVIGATION */}

        <nav className="hidden items-center gap-10 md:flex">
          <button
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              text-sm
              font-semibold
              text-slate-300
              transition
              hover:text-cyan-400
            "
          >
            Features
          </button>

          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              text-sm
              font-semibold
              text-slate-300
              transition
              hover:text-cyan-400
            "
          >
            About
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              text-sm
              font-semibold
              text-slate-300
              transition
              hover:text-cyan-400
            "
          >
            Contact
          </button>
        </nav>

        {/* ACTIONS */}

        <div className="flex items-center gap-3">

          {/* LOGIN */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/login")}
            className="
              rounded-xl
              border
              border-cyan-400/30
              bg-white/5
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
              transition
              hover:border-cyan-400/60
              hover:bg-cyan-400/10
              hover:text-cyan-300
            "
          >
            Login
          </motion.button>

          {/* GET STARTED */}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59,130,246,0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/login")}
            className="
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              transition
              hover:from-cyan-500
              hover:to-blue-600
            "
          >
            Get Started
          </motion.button>

        </div>
      </div>
    </motion.header>
  );
}
