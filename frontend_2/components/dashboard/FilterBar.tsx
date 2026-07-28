"use client";

import { motion } from "framer-motion";


export default function FilterBar() {


  const filters = [
    "Today",
    "This Week",
    "This Month",
    "This Year",
  ];


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
        bg-white
        rounded-xl
        shadow-lg
        p-5
        flex
        flex-col
        md:flex-row
        md:items-center
        justify-between
        gap-4
      "

    >


      <h2
        className="
          text-lg
          font-bold
          text-gray-800
        "
      >

        Analytics Period

      </h2>



      <select

        className="
          border
          rounded-lg
          px-4
          py-2
          text-gray-700
          outline-none
          cursor-pointer
        "

      >

        {filters.map((filter) => (

          <option 
            key={filter}
          >

            {filter}

          </option>

        ))}


      </select>


    </motion.div>

  );

}
