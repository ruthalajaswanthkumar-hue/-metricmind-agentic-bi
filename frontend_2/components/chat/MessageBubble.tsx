"use client";

import { motion } from "framer-motion";


interface MessageProps {
  text: string;
  sender: "user" | "ai";
}



export default function MessageBubble({
  text,
  sender,
}: MessageProps) {


  return (

    <motion.div

      initial={{
        opacity:0,
        y:20,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:0.3,
      }}


      className={`
        mb-4
        flex
        ${sender==="user" ? "justify-end" : "justify-start"}
      `}

    >


      <div

        className={`
        max-w-xs
        rounded-2xl
        px-5
        py-3
        shadow-md

        ${
          sender==="user"

          ?

          "bg-blue-600 text-white"

          :

          "bg-gray-100 text-gray-900 dark:bg-slate-700 dark:text-white"

        }

        `}

      >

        {text}

      </div>


    </motion.div>


  );

}
