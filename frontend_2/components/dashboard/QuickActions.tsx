 "use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  FaFileAlt,
  FaRobot,
  FaDownload,
  FaSyncAlt,
} from "react-icons/fa";

export default function QuickActions() {

  const router = useRouter();

  const exportCSV = async () => {
    try {

      const res = await fetch(
        "http://127.0.0.1:8000/dashboard/kpis"
      );

      const data = await res.json();

      const csv =
        "Metric,Value\n" +
        `Revenue,${data.Revenue}\n` +
        `Profit,${data.Profit}\n` +
        `Orders,${data.Orders}\n` +
        `Customers,${data.Customers}`;

      const blob = new Blob(
        [csv],
        {
          type: "text/csv",
        }
      );

      const url =
        window.URL.createObjectURL(blob);

      const a =
        document.createElement("a");

      a.href = url;

      a.download = "MetricMind_Report.csv";

      a.click();

      window.URL.revokeObjectURL(url);

    } catch (err) {

      alert("Export failed");

    }
  };



  const refreshDashboard = () => {

    window.location.reload();

  };



  return (

    <motion.div
      initial={{
        opacity:0,
        y:30,
      }}
      animate={{
        opacity:1,
        y:0,
      }}
      transition={{
        duration:0.6,
      }}
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-6
      shadow-lg
      dark:border-gray-700
      dark:bg-slate-900
      "
    >

      <h2
        className="
        mb-6
        text-xl
        font-bold
        text-gray-900
        dark:text-white
        "
      >
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <motion.button

          whileHover={{
            scale:1.05,
            y:-5,
          }}

          whileTap={{
            scale:0.95,
          }}

          onClick={() =>
            router.push("/reports")
          }

          className="
          rounded-2xl
          bg-gradient-to-r
          from-blue-500
          to-indigo-600
          p-5
          text-white
          shadow-lg
          "

        >

          <div className="flex flex-col items-center gap-3">

            <FaFileAlt size={28}/>

            <p className="font-semibold">
              Generate Report
            </p>

          </div>

        </motion.button>



        <motion.button

          whileHover={{
            scale:1.05,
            y:-5,
          }}

          whileTap={{
            scale:0.95,
          }}

          onClick={() =>
            router.push("/chat")
          }

          className="
          rounded-2xl
          bg-gradient-to-r
          from-purple-500
          to-pink-600
          p-5
          text-white
          shadow-lg
          "

        >

          <div className="flex flex-col items-center gap-3">

            <FaRobot size={28}/>

            <p className="font-semibold">
              Ask AI
            </p>

          </div>

        </motion.button>



        <motion.button

          whileHover={{
            scale:1.05,
            y:-5,
          }}

          whileTap={{
            scale:0.95,
          }}

          onClick={exportCSV}

          className="
          rounded-2xl
          bg-gradient-to-r
          from-green-500
          to-emerald-600
          p-5
          text-white
          shadow-lg
          "

        >

          <div className="flex flex-col items-center gap-3">

            <FaDownload size={28}/>

            <p className="font-semibold">
              Export CSV
            </p>

          </div>

        </motion.button>



        <motion.button

          whileHover={{
            scale:1.05,
            y:-5,
          }}

          whileTap={{
            scale:0.95,
          }}

          onClick={refreshDashboard}

          className="
          rounded-2xl
          bg-gradient-to-r
          from-orange-500
          to-red-500
          p-5
          text-white
          shadow-lg
          "

        >

          <div className="flex flex-col items-center gap-3">

            <FaSyncAlt size={28}/>

            <p className="font-semibold">
              Refresh
            </p>

          </div>

        </motion.button>

      </div>

    </motion.div>

  );

}
