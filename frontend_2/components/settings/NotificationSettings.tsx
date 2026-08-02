"use client";


import { useState } from "react";
import { motion } from "framer-motion";



export default function NotificationSettings(){


  const [notifications,setNotifications] = useState({

    email:true,

    reports:true,

    ai:true,

  });





  function toggleNotification(
    type:"email"|"reports"|"ai"
  ){


    setNotifications((prev)=>({

      ...prev,

      [type]:!prev[type],

    }));


  }






  return (


    <motion.div


      whileHover={{
        scale:1.02,
      }}



      className="
      rounded-2xl
      bg-white
      p-6
      shadow-md

      dark:bg-slate-900
      "

    >





      <h2

        className="
        text-lg
        font-semibold
        text-gray-900

        dark:text-white
        "

      >

        Notifications

      </h2>





      <p

        className="
        mt-1
        text-sm
        text-gray-500

        dark:text-gray-400
        "

      >

        Manage your notification preferences.

      </p>







      <div className="mt-5 space-y-4">






        {/* Email */}



        <NotificationItem


          title="Email Notifications"


          description="Receive important account updates."


          enabled={notifications.email}


          onClick={()=>toggleNotification("email")}


        />







        {/* Reports */}



        <NotificationItem


          title="Report Alerts"


          description="Get notified when reports are generated."


          enabled={notifications.reports}


          onClick={()=>toggleNotification("reports")}


        />







        {/* AI */}



        <NotificationItem


          title="AI Updates"


          description="Receive AI insights and suggestions."


          enabled={notifications.ai}


          onClick={()=>toggleNotification("ai")}


        />






      </div>







    </motion.div>


  );


}







function NotificationItem({

  title,

  description,

  enabled,

  onClick,

}:{

  title:string;

  description:string;

  enabled:boolean;

  onClick:()=>void;

}){


  return (


    <div

      className="
      flex
      items-center
      justify-between
      rounded-xl
      bg-gray-50
      p-4

      dark:bg-slate-800
      "

    >



      <div>


        <h3

          className="
          font-medium
          text-gray-900

          dark:text-white
          "

        >

          {title}

        </h3>



        <p

          className="
          text-sm
          text-gray-500

          dark:text-gray-400
          "

        >

          {description}

        </p>



      </div>







      <button


        onClick={onClick}


        className={`
        
        h-7
        w-12
        rounded-full
        transition

        ${
          enabled
          ? "bg-blue-600"
          : "bg-gray-300 dark:bg-gray-600"
        }

        `}



      >


        <motion.div


          animate={{

            x: enabled ? 20 : 2,

          }}


          className="
          h-5
          w-5
          rounded-full
          bg-white
          "

        />


      </button>





    </div>


  );


}
