"use client";


import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { FaArrowTrendUp } from "react-icons/fa6";



interface RevenueChartProps {

  data:{
    month:string;
    revenue:number;
  }[];

}





export default function RevenueChart({
  data,
}:RevenueChartProps){



  return (



    <motion.div


      initial={{
        opacity:0,
        y:40,
      }}



      animate={{
        opacity:1,
        y:0,
      }}



      transition={{
        duration:0.6,
      }}



      whileHover={{
        y:-6,
      }}



      className="

      rounded-3xl

      border

      border-gray-200

      bg-white

      p-6

      shadow-xl


      dark:border-gray-700

      dark:bg-slate-900

      "

    >







      {/* Header */}



      <div className="mb-6 flex items-start justify-between">





        <div>



          <p

            className="

            text-sm

            font-semibold

            uppercase

            tracking-widest

            text-blue-600

            dark:text-blue-400

            "

          >

            Revenue Overview


          </p>






          <h2

            className="

            mt-2

            text-3xl

            font-extrabold

            text-gray-900

            dark:text-white

            "

          >

            ₹5,20,000


          </h2>







          <div className="mt-3 flex items-center gap-3">



            <span

              className="

              rounded-full

              bg-green-100

              px-3

              py-1

              text-sm

              font-semibold

              text-green-700


              dark:bg-green-900/40

              dark:text-green-300

              "

            >

              +12%

            </span>






            <span

              className="

              flex

              items-center

              gap-1

              text-sm

              text-gray-500

              dark:text-gray-400

              "

            >

              <FaArrowTrendUp />

              Compared to last month


            </span>






          </div>





        </div>






      </div>









      {/* Chart */}



      {

        data.length > 0 ? (



          <ResponsiveContainer

            width="100%"

            height={320}

          >



            <BarChart

              data={data}

              margin={{
                top:10,
                right:10,
                left:-10,
                bottom:0,
              }}

            >





              <CartesianGrid

                strokeDasharray="4 4"

                vertical={false}

              />






              <XAxis


                dataKey="month"


                tickLine={false}


                axisLine={false}


              />






              <YAxis


                tickLine={false}


                axisLine={false}


              />








              <Tooltip


                cursor={{
                  fill:"transparent",
                }}



                contentStyle={{

                  borderRadius:16,

                  border:"none",

                  boxShadow:
                  "0 15px 35px rgba(0,0,0,0.15)",

                }}



              />







              <Bar


                dataKey="revenue"


                radius={[
                  12,
                  12,
                  0,
                  0
                ]}


                animationDuration={1800}


                fill="#2563EB"


              />







            </BarChart>





          </ResponsiveContainer>



        )

        :



        (



          <div

            className="

            flex

            h-[320px]

            items-center

            justify-center

            text-gray-500

            dark:text-gray-400

            "

          >

            No revenue data available


          </div>



        )

      }








    </motion.div>



  );


}
