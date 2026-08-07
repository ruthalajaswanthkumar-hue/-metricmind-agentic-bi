 "use client";

import LoginForm from "@/components/loginform";
import { motion } from "framer-motion";
import { FaRobot, FaChartLine } from "react-icons/fa";


export default function LoginPage(){


  return (

    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center

      relative
      overflow-hidden

      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-indigo-900

      p-6
      "
    >



      {/* Background Glow */}


      <motion.div

        animate={{
          y:[0,30,0]
        }}

        transition={{
          duration:6,
          repeat:Infinity
        }}

        className="
        absolute
        left-10
        top-20

        h-72
        w-72

        rounded-full

        bg-blue-500/20

        blur-3xl
        "

      />




      <motion.div

        animate={{
          y:[0,-30,0]
        }}

        transition={{
          duration:7,
          repeat:Infinity
        }}

        className="
        absolute
        bottom-10
        right-10

        h-80
        w-80

        rounded-full

        bg-purple-500/20

        blur-3xl
        "

      />






      <motion.div


        initial={{
          opacity:0,
          y:40
        }}


        animate={{
          opacity:1,
          y:0
        }}


        transition={{
          duration:0.7
        }}


        className="
        relative
        z-10

        grid

        max-w-5xl

        overflow-hidden

        rounded-3xl

        border

        border-white/10

        bg-white/10

        shadow-2xl

        backdrop-blur-xl


        md:grid-cols-2
        "

      >





        {/* Left Side */}


        <div

          className="
          hidden

          flex-col

          justify-center

          p-10

          text-white

          md:flex
          "

        >


          <div
            className="
            flex
            items-center
            gap-3
            "
          >

            <FaRobot
              className="text-cyan-400"
              size={40}
            />


            <h1
              className="
              text-3xl
              font-extrabold
              "
            >

              MetricMind

            </h1>


          </div>





          <h2

            className="
            mt-8
            text-4xl
            font-bold
            leading-tight
            "

          >

            Transform Data

            <br/>

            Into Smart Decisions

          </h2>





          <p

            className="
            mt-5
            text-slate-300
            "

          >

            Login to access AI-powered analytics,
            dashboards and business insights.

          </p>





          <div

            className="
            mt-8
            flex
            items-center
            gap-4
            "

          >

            <FaChartLine
              className="text-green-400"
              size={28}
            />


            <span>

              Real-time Business Intelligence

            </span>


          </div>



        </div>








        {/* Login Form */}


        <div

          className="
          bg-white

          p-8

          sm:p-10
          "

        >



          <h2

            className="
            text-3xl
            font-bold
            text-blue-300
            "

          >

            Welcome Back 

          </h2>



          <p

            className="
            mt-2
            text-gray-500
            "

          >

            Login to your MetricMind account

          </p>





          <div className="mt-8">

            <LoginForm />

          </div>




        </div>





      </motion.div>



    </main>

  );

}
