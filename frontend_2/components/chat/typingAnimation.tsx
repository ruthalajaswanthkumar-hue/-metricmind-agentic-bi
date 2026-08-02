"use client";

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";


export default function TypingAnimation() {

  return (

    <div className="mb-4 flex items-center gap-3">


      <div
        className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-blue-600
        text-white
        "
      >

        <FaRobot />

      </div>




      <div
        className="
        flex
        items-center
        gap-1
        rounded-2xl
        bg-gray-100
        px-5
        py-3

        dark:bg-slate-700
        "
      >


        <span className="text-sm text-gray-500 dark:text-gray-300">
          MetricMind AI is thinking
        </span>



        {[0,1,2].map((item)=>(

          <motion.span

            key={item}

            animate={{
              y:[0,-5,0],
            }}

            transition={{
              duration:0.8,
              repeat:Infinity,
              delay:item*0.2,
            }}

            className="
            h-2
            w-2
            rounded-full
            bg-blue-500
            "

          />


        ))}


      </div>


    </div>

  );
}
