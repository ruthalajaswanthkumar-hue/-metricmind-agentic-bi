"use client";


import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaRobot,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";



export default function Hero(){


  return (


    <section

      className="
      relative
      overflow-hidden

      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-indigo-900

      py-20
      sm:py-24
      "

    >





      {/* Background Effects */}


      <motion.div

        animate={{
          y:[0,20,0],
        }}

        transition={{
          duration:5,
          repeat:Infinity,
        }}

        className="
        absolute
        -left-24
        top-10

        h-72
        w-72

        rounded-full

        bg-blue-500/20

        blur-3xl
        "

      />





      <motion.div


        animate={{
          y:[0,-20,0],
        }}


        transition={{
          duration:6,
          repeat:Infinity,
        }}


        className="
        absolute
        bottom-0
        right-0

        h-80
        w-80

        rounded-full

        bg-purple-500/20

        blur-3xl
        "

      />









      <div

        className="
        mx-auto

        flex
        max-w-7xl

        flex-col
        items-center

        gap-14

        px-6

        lg:flex-row

        "

      >







        {/* Left Content */}



        <motion.div


          initial={{
            opacity:0,
            x:-60,
          }}


          animate={{
            opacity:1,
            x:0,
          }}



          transition={{
            duration:0.7,
          }}



          className="
          flex-1
          "

        >




          <span

            className="
            rounded-full

            bg-blue-500/20

            px-4
            py-2

            text-sm

            font-semibold

            text-blue-300
            "

          >

            🚀 AI Powered Analytics Platform

          </span>







          <h1

            className="
            mt-8

            text-5xl

            font-extrabold

            leading-tight

            text-white

            sm:text-6xl

            lg:text-7xl

            "

          >


            Transform Your

            <br/>


            <span

              className="
              bg-gradient-to-r

              from-cyan-400

              to-blue-500

              bg-clip-text

              text-transparent
              "

            >

              Business Data

            </span>


            <br/>


            Into Insights


          </h1>







          <p

            className="
            mt-8

            max-w-2xl

            text-lg

            leading-8

            text-slate-300

            sm:text-xl
            "

          >

            MetricMind helps businesses analyze revenue,
            monitor KPIs, generate AI insights, and make
            smarter decisions with interactive dashboards.


          </p>








          <div

            className="
            mt-10

            flex

            flex-wrap

            gap-5

            "

          >




            <motion.button


              whileHover={{
                scale:1.05,
              }}


              whileTap={{
                scale:0.95,
              }}


              className="
              flex

              items-center

              gap-2

              rounded-2xl

              bg-gradient-to-r

              from-blue-600

              to-indigo-600

              px-8

              py-4

              font-semibold

              text-white

              shadow-xl

              "

            >

              Get Started

              <FaArrowRight/>

            </motion.button>






            <motion.button


              whileHover={{
                scale:1.05,
              }}


              whileTap={{
                scale:0.95,
              }}


              className="
              rounded-2xl

              border

              border-white/20

              px-8

              py-4

              font-semibold

              text-white

              backdrop-blur-lg

              hover:bg-white/10
              "

            >

              Learn More

            </motion.button>




          </div>





        </motion.div>









        {/* Dashboard Preview */}




        <motion.div


          initial={{
            opacity:0,
            x:60,
          }}



          animate={{
            opacity:1,
            x:0,
          }}



          transition={{
            duration:0.8,
          }}



          className="
          flex-1
          "

        >




          <motion.div


            animate={{
              y:[0,-10,0],
            }}



            transition={{
              duration:4,
              repeat:Infinity,
            }}



            className="
            rounded-3xl

            border

            border-white/10

            bg-white/10

            p-6

            backdrop-blur-xl

            shadow-2xl

            sm:p-8
            "

          >





            <div

              className="
              mb-8

              flex

              items-center

              justify-between
              "

            >


              <h3 className="
              text-2xl
              font-bold
              text-white
              ">

                AI Dashboard

              </h3>




              <FaRobot

                size={30}

                className="text-cyan-400"

              />



            </div>








            <div className="space-y-5">





              <div

                className="
                flex

                items-center

                justify-between

                rounded-2xl

                bg-white/10

                p-5
                "

              >


                <div className="flex items-center gap-3">


                  <FaChartLine className="text-green-400"/>


                  <span className="text-white">

                    Revenue Growth

                  </span>


                </div>




                <span className="font-bold text-green-400">

                  +12%

                </span>



              </div>








              <div

                className="
                flex

                items-center

                justify-between

                rounded-2xl

                bg-white/10

                p-5
                "

              >


                <div className="flex items-center gap-3">


                  <FaBrain className="text-purple-400"/>


                  <span className="text-white">

                    AI Accuracy

                  </span>


                </div>



                <span className="font-bold text-cyan-400">

                  98%

                </span>



              </div>








              <div

                className="
                rounded-2xl

                bg-gradient-to-r

                from-blue-600

                to-indigo-600

                p-6
                "

              >


                <h3 className="text-lg font-bold text-white">

                  Active Users

                </h3>



                <h2 className="
                mt-3
                text-4xl
                font-extrabold
                text-white
                ">

                  24,580

                </h2>



              </div>





            </div>






          </motion.div>






        </motion.div>







      </div>





    </section>


  );


}
