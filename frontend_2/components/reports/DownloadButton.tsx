"use client";


import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";




export default function DownloadButton(){



  function downloadReport(){


    const fileContent =
`
MetricMind Business Report

Report generated successfully.

`;



    const blob = new Blob(
      [fileContent],
      {
        type:"text/plain"
      }
    );



    const url = URL.createObjectURL(blob);



    const link = document.createElement("a");


    link.href = url;


    link.download =
      "MetricMind_Report.txt";



    link.click();



    URL.revokeObjectURL(url);



  }





  return (



    <motion.button


      whileHover={{
        scale:1.05,
      }}



      whileTap={{
        scale:0.95,
      }}



      onClick={downloadReport}



      className="
      flex
      items-center
      gap-2

      rounded-xl

      bg-blue-600

      px-4
      py-2

      text-sm
      font-medium

      text-white

      transition

      hover:bg-blue-700
      "


    >




      <FaDownload />

      Download



    </motion.button>



  );


}
