"use client";


import { motion } from "framer-motion";
import { FaChartLine } from "react-icons/fa";

import DeleteButton from "./DeleteButton";



interface HistoryItem {

  id:number;

  question:string;

  answer:string;

  date:string;

  category:string;

}




interface HistoryCardProps {

  item:HistoryItem;

  onDelete:(id:number)=>void;

}






export default function HistoryCard({

  item,

  onDelete,

}:HistoryCardProps){



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
      transition

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






        {/* Left Content */}



        <div className="flex gap-4">



          {/* Icon */}


          <div

            className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-blue-100
            text-blue-600

            dark:bg-blue-900
            dark:text-blue-300
            "

          >

            <FaChartLine />

          </div>







          {/* Details */}



          <div>



            <h2

              className="
              text-lg
              font-semibold
              text-gray-900

              dark:text-white
              "

            >

              {item.question}

            </h2>





            <p

              className="
              mt-2
              text-sm
              text-gray-600

              dark:text-gray-400
              "

            >

              {item.answer}

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

                {item.category}

              </span>





              <span

                className="
                text-xs
                text-gray-500

                dark:text-gray-400
                "

              >

                {item.date}

              </span>




            </div>





          </div>





        </div>









        {/* Delete Button */}



        <DeleteButton

          onDelete={()=>
            onDelete(item.id)
          }

        />






      </div>





    </motion.div>


  );


}
