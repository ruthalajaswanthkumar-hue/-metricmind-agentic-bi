"use client";


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";




export default function ThemeToggle(){


  const [darkMode,setDarkMode] = useState(false);





  useEffect(()=>{


    const savedTheme =
      localStorage.getItem("theme");



    if(savedTheme === "dark"){

      document.documentElement.classList.add("dark");

      setDarkMode(true);

    }



  },[]);








  function toggleTheme(){



    if(darkMode){


      document.documentElement.classList.remove("dark");


      localStorage.setItem(
        "theme",
        "light"
      );


      setDarkMode(false);



    }else{


      document.documentElement.classList.add("dark");


      localStorage.setItem(
        "theme",
        "dark"
      );


      setDarkMode(true);



    }


  }







  return (



    <motion.div


      whileHover={{
        scale:1.02,
      }}



      className="
      flex
      items-center
      justify-between
      rounded-2xl
      bg-white
      p-6
      shadow-md

      dark:bg-slate-900
      "

    >





      <div>


        <h2

          className="
          text-lg
          font-semibold
          text-gray-900

          dark:text-white
          "

        >

          Theme

        </h2>



        <p

          className="
          text-sm
          text-gray-500

          dark:text-gray-400
          "

        >

          Change application appearance

        </p>



      </div>







      <button


        onClick={toggleTheme}


        className="
        flex
        items-center
        gap-3
        rounded-xl
        bg-gray-100
        px-4
        py-3

        text-gray-800

        transition

        hover:bg-gray-200


        dark:bg-slate-800
        dark:text-white
        "

      >



        {
          darkMode ?

          <>

            <FaSun />

            Light

          </>

          :

          <>

            <FaMoon />

            Dark

          </>

        }




      </button>







    </motion.div>


  );


}
