"use client";


import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaBell,
  FaMoon,
  FaSun,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";



export default function Navbar(){


  const [darkMode,setDarkMode] = useState(
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark")
  );



  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday:"long",
      day:"numeric",
      month:"long",
      year:"numeric",
    }
  );





  function toggleTheme(){


    if(darkMode){


      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );


      setDarkMode(false);



    }else{


      document.documentElement.classList.add(
        "dark"
      );


      localStorage.setItem(
        "theme",
        "dark"
      );


      setDarkMode(true);


    }


  }






  return (


    <motion.header


      initial={{
        opacity:0,
        y:-25,
      }}


      animate={{
        opacity:1,
        y:0,
      }}


      transition={{
        duration:0.5,
      }}



      className="
      sticky
      top-0
      z-40

      border-b
      border-gray-200

      bg-white/80
      backdrop-blur-xl

      dark:border-gray-700
      dark:bg-slate-900/80
      "

    >





      <div

        className="
        flex
        items-center
        justify-between

        px-4
        py-4

        sm:px-8
        "

      >





        {/* Title */}



        <div>


          <h1

            className="
            text-2xl
            font-bold

            text-gray-900

            dark:text-white

            sm:text-3xl
            "

          >

            Dashboard

          </h1>




          <p

            className="
            mt-1
            text-xs
            text-gray-500

            dark:text-gray-400

            sm:text-sm
            "

          >

            {today}

          </p>



        </div>







        {/* Search */}



        <motion.div

          initial={{
            opacity:0,
            scale:0.9,
          }}


          animate={{
            opacity:1,
            scale:1,
          }}



          className="
          hidden
          lg:flex
          "

        >


          <div

            className="
            flex
            items-center
            gap-3

            rounded-2xl

            border
            border-gray-200

            bg-gray-100

            px-5
            py-3

            dark:border-gray-700
            dark:bg-slate-800
            "

          >



            <FaSearch className="text-gray-500"/>



            <input

              type="text"

              placeholder="Search..."

              className="
              w-72
              bg-transparent
              outline-none

              text-gray-700

              dark:text-white
              "

            />



          </div>



        </motion.div>







        {/* Actions */}



        <div

          className="
          flex
          items-center
          gap-3
          "

        >




          {/* Theme */}



          <motion.button


            onClick={toggleTheme}


            whileHover={{
              scale:1.08,
            }}


            whileTap={{
              scale:0.95,
            }}



            className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-2xl

            bg-gray-100

            text-gray-700

            transition

            hover:bg-blue-100


            dark:bg-slate-800
            dark:text-white
            "

          >


            {
              darkMode
              ?
              <FaSun />
              :
              <FaMoon />
            }


          </motion.button>







          {/* Notification */}



          <motion.button


            whileHover={{
              scale:1.08,
            }}


            className="
            relative

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-2xl

            bg-gray-100

            text-gray-700


            dark:bg-slate-800
            dark:text-white
            "

          >


            <FaBell/>


            <span

              className="
              absolute
              right-2
              top-2

              h-2.5
              w-2.5

              rounded-full

              bg-red-500
              "

            />


          </motion.button>







          {/* Profile */}



          <motion.div


            whileHover={{
              scale:1.03,
            }}



            className="
            flex
            items-center
            gap-3

            rounded-2xl

            bg-gradient-to-r
            from-blue-600
            to-indigo-600

            px-3
            py-2

            text-white

            shadow-lg
            "

          >



            <FaUserCircle size={38}/>




            <div className="hidden md:block">


              <p className="font-semibold">

                 JASS

              </p>



              <p className="text-xs text-blue-100">

                Business Analyst

              </p>



            </div>




          </motion.div>





        </div>





      </div>




    </motion.header>


  );


}
