"use client";


import { motion } from "framer-motion";

import ProfileCard from "@/components/settings/ProfileCard";
import ThemeToggle from "@/components/settings/ThemeToggle";
import NotificationSettings from "@/components/settings/NotificationSettings";
import LogoutButton from "@/components/settings/LogoutButton";



export default function SettingsPage(){


  return (


    <main

      className="
      min-h-screen
      bg-gray-100
      p-5
      sm:p-8

      dark:bg-slate-950
      "

    >



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
          duration:0.5,
        }}



        className="
        mx-auto
        max-w-3xl
        space-y-6
        "

      >






        {/* Header */}



        <div>


          <h1

            className="
            text-3xl
            font-bold
            text-gray-900

            dark:text-white
            "

          >

            Settings

          </h1>




          <p

            className="
            mt-2
            text-gray-600

            dark:text-gray-400
            "

          >

            Manage your profile, preferences and account settings.

          </p>



        </div>







        {/* Profile */}



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
            delay:0.1,
          }}

        >

          <ProfileCard />

        </motion.div>








        {/* Theme */}



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
            delay:0.2,
          }}

        >

          <ThemeToggle />

        </motion.div>








        {/* Notifications */}



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
            delay:0.3,
          }}

        >

          <NotificationSettings />

        </motion.div>








        {/* Logout */}



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
            delay:0.4,
          }}

        >

          <LogoutButton />

        </motion.div>





      </motion.div>



    </main>


  );


}
