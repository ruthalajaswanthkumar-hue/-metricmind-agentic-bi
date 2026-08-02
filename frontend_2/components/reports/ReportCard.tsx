"use client";


import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

import DownloadButton from "./DownloadButton";



export interface Report {

  id:number;

  title:string;

  description:string;

  type:string;

  date:string;

}



interface ReportCardProps {

  report:Report;

}





export default function ReportCard({

  report,

}:ReportCardProps){


  return (

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
        duration:0.3,
      }}


      whileHover={{
        scale:1.02,
      }}


      className="
      rounded-2xl
      bg-white
      p-5
      shadow-md

      dark:bg-slate-900
      "

    >


      <div
        className="
        flex
        items-start
        justify-between
        gap-4
        "
      >



        <div className="flex gap-4">


          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-blue-100
            text-blue-600

            dark:bg-blue-900
            dark:text-blue-300
            "
          >

            <FaFileAlt />

          </div>





          <div>


            <h2
              className="
              text-lg
              font-semibold
              text-gray-900

              dark:text-white
              "
            >

              {report.title}

            </h2>



            <p
              className="
              mt-2
              text-sm
              text-gray-600

              dark:text-gray-400
              "
            >

              {report.description}

            </p>




            <div
              className="
              mt-3
              flex
              items-center
              gap-3
              "
            >


              <span
                className="
                rounded-full
                bg-blue-50
                px-3
                py-1
                text-xs
                text-blue-700

                dark:bg-blue-900
                dark:text-blue-300
                "
              >

                {report.type}

              </span>




              <span
                className="
                text-xs
                text-gray-500

                dark:text-gray-400
                "
              >

                {report.date}

              </span>


            </div>



          </div>



        </div>





        <DownloadButton />



      </div>



    </motion.div>

  );


}
