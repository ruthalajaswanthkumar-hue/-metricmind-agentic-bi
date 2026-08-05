
"use client";

import { motion } from "framer-motion";


interface StatCardProps {

  title: string;

  value: string;

  growth: string;

  icon: React.ReactNode;

}



export default function StatCard({

  title,

  value,

  growth,

  icon,

}: StatCardProps) {


  return (

    <motion.div

      whileHover={{
        scale: 1.05,
      }}

      transition={{
        duration: 0.2,
      }}

      className="
        bg-white
        rounded-xl
        shadow-lg
        p-5
        flex
        justify-between
        items-center
      "

    >


      <div>


        <p
          className="
            text-gray-500
            text-sm
          "
        >

          {title}

        </p>



        <h2
          className="
            text-2xl
            font-bold
            text-gray-800
            mt-2
          "
        >

          {value}

        </h2>



        <p
          className="
            text-green-600
            text-sm
            mt-2
            font-medium
          "
        >

          ↑ {growth}

        </p>



      </div>



      <div
        className="
          bg-blue-100
          text-blue-600
          p-3
          rounded-full
        "
      >

        {icon}

      </div>



    </motion.div>

  );

}
