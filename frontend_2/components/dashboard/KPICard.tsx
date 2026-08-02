"use client";


import { ReactNode } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";


interface KPICardProps {

  title:string;

  value:string | number;

  icon:ReactNode;

  percentage:string;

  trend:string;

}





export default function KPICard({

  title,

  value,

  icon,

  percentage,

  trend,

}:KPICardProps){



  const numericValue = Number(
    value.toString().replace(/[^\d]/g,"")
  );


  const hasCurrency =
    value.toString().includes("₹");



  return (



    <motion.div


      initial={{
        opacity:0,
        y:30,
      }}


      animate={{
        opacity:1,
        y:0,
      }}



      whileHover={{
        y:-10,
        scale:1.03,
      }}



      transition={{
        duration:0.4,
      }}



      className="
      group
      relative
      overflow-hidden

      rounded-3xl

      border
      border-gray-200

      bg-white

      shadow-lg

      transition-all

      dark:border-gray-700

      dark:bg-slate-900

      "

    >






      {/* Glow Effect */}


      <div

        className="
        absolute
        inset-0

        opacity-0

        transition

        duration-300

        group-hover:opacity-100

        bg-gradient-to-br

        from-blue-500/10

        via-purple-500/10

        to-transparent

        "

      />







      {/* Top Gradient */}


      <div

        className="
        h-1.5

        w-full

        bg-gradient-to-r

        from-blue-500

        via-indigo-500

        to-purple-600

        "

      />








      <div className="relative p-6">







        <div

          className="
          flex

          items-start

          justify-between

          "

        >







          {/* Content */}



          <div>



            <p

              className="
              text-sm

              font-semibold

              uppercase

              tracking-wider

              text-gray-500

              dark:text-gray-400

              "

            >

              {title}

            </p>







            <h2

              className="
              mt-4

              text-4xl

              font-extrabold

              text-gray-900

              dark:text-white

              "

            >



              {hasCurrency && "₹"}



              <CountUp

                end={numericValue}

                duration={2}

                separator=","

              />



            </h2>






          </div>









          {/* Icon */}




          <motion.div



            whileHover={{
              rotate:10,
              scale:1.1,
            }}



            className="
            flex

            h-16

            w-16

            items-center

            justify-center

            rounded-2xl

            bg-gradient-to-br

            from-blue-500

            to-indigo-600

            text-3xl

            text-white

            shadow-xl

            "

          >


            {icon}


          </motion.div>






        </div>









        {/* Footer */}





        <div

          className="
          mt-8

          flex

          items-center

          justify-between

          "

        >





          <span

            className="
            rounded-full

            bg-green-100

            px-4

            py-1.5

            text-sm

            font-semibold

            text-green-700


            dark:bg-green-900/40

            dark:text-green-300

            "

          >

            ▲ {percentage}


          </span>






          <span

            className="
            text-sm

            font-medium

            text-gray-500

            dark:text-gray-400

            "

          >

            {trend}


          </span>






        </div>







      </div>






    </motion.div>



  );


}
