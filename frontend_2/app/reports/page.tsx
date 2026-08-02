"use client";


import { motion } from "framer-motion";


import ReportCard, {
  Report
} from "@/components/reports/ReportCard";


import ReportFilter from "@/components/reports/ReportFilter";




const reports: Report[] = [


  {
    id:1,
    title:"Sales Performance Report",
    description:
      "Monthly sales analysis with revenue trends and growth insights.",
    type:"Sales",
    date:"26 Jul 2026",
  },


  {
    id:2,
    title:"Customer Analysis Report",
    description:
      "Customer behaviour, retention and purchasing patterns.",
    type:"Customers",
    date:"25 Jul 2026",
  },


  {
    id:3,
    title:"Revenue Forecast Report",
    description:
      "Future revenue prediction based on previous business data.",
    type:"Finance",
    date:"24 Jul 2026",
  },


];





export default function ReportsPage(){


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
        max-w-5xl
        "

      >



        <div className="mb-8">


          <h1
            className="
            text-3xl
            font-bold
            text-gray-900

            dark:text-white
            "
          >

            Business Reports

          </h1>



          <p
            className="
            mt-2
            text-gray-600

            dark:text-gray-400
            "
          >

            View generated business reports and analytics insights.

          </p>


        </div>





        <div
          className="
          mb-8
          grid
          gap-4
          sm:grid-cols-3
          "
        >


          <div className="rounded-2xl bg-white p-5 shadow-md dark:bg-slate-900">

            <p className="text-sm text-gray-500">
              Total Reports
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              12
            </h2>

          </div>




          <div className="rounded-2xl bg-white p-5 shadow-md dark:bg-slate-900">

            <p className="text-sm text-gray-500">
              Generated Today
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              3
            </h2>

          </div>




          <div className="rounded-2xl bg-white p-5 shadow-md dark:bg-slate-900">

            <p className="text-sm text-gray-500">
              Categories
            </p>

            <h2 className="mt-2 text-3xl font-bold text-purple-600">
              4
            </h2>

          </div>


        </div>





        <ReportFilter />




        <div
          className="
          mt-6
          grid
          gap-5
          "
        >


          {
            reports.map((report)=>(

              <ReportCard

                key={report.id}

                report={report}

              />

            ))
          }


        </div>




      </motion.div>


    </main>

  );


}
