"use client";

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import MarkdownRenderer from "./MarkdownRenderer";


interface AIResponseProps {
  content: string;
}



export default function AIResponse({
  content,
}: AIResponseProps) {


  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.4,
      }}

      className="
      mb-5
      flex
      items-start
      gap-3
      "

    >


      {/* AI Icon */}

      <div
        className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-blue-600
        text-white
        "
      >

        <FaRobot />

      </div>





      {/* AI Response */}

      <div
        className="
        max-w-3xl
        rounded-2xl
        bg-gray-100
        px-5
        py-4
        text-gray-900
        shadow-md

        dark:bg-slate-700
        dark:text-white
        "
      >


        <MarkdownRenderer 
          content={content}
        />


      </div>



    </motion.div>

  );

}
