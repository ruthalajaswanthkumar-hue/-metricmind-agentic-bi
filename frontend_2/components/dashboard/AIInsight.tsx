"use client";

import { motion } from "framer-motion";
import { FiTrendingUp, FiAlertTriangle, FiStar } from "react-icons/fi";


export default function AIInsight() {


  const insights = [
    {
      icon: <FiTrendingUp size={24} />,
      title: "Revenue Growth",
      description:
        "Revenue increased by 12% compared to last month.",
    },

    {
      icon: <FiAlertTriangle size={24} />,
      title: "Sales Alert",
      description:
        "South region sales need more attention.",
    },

    {
      icon: <FiStar size={24} />,
      title: "Top Performance",
      description:
        "Customer engagement is improving.",
    },
  ];



  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.5,
      }}

      className="
        bg-white
        rounded-xl
        shadow-lg
        p-6
        mt-6
      "

    >


      <h2
        className="
          text-xl
          font-bold
          text-gray-800
          mb-5
        "
      >

        🤖 AI Business Insights

      </h2>



      <div className="space-y-4">


        {insights.map((item, index) => (

          <motion.div

            key={index}

            whileHover={{
              scale: 1.02,
            }}

            className="
              flex
              items-center
              gap-4
              p-4
              bg-gray-50
              rounded-lg
            "

          >

            <div className="text-blue-600">

              {item.icon}

            </div>


            <div>

              <h3 className="font-semibold text-gray-800">

                {item.title}

              </h3>


              <p className="text-gray-600 text-sm">

                {item.description}

              </p>


            </div>


          </motion.div>

        ))}


      </div>


    </motion.div>

  );

}
