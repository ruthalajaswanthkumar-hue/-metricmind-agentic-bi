"use client";


import { useState } from "react";
import { motion } from "framer-motion";

import HistoryCard from "@/components/history/HistoryCard";
import HistorySearch from "@/components/history/HistorySearch";



type HistoryItem = {

  id:number;

  question:string;

  answer:string;

  date:string;

  category:string;

};





export default function HistoryPage(){


  const [history,setHistory] = useState<HistoryItem[]>([


    {
      id:1,
      question:"Show Revenue",
      answer:"Revenue increased by 12% this month.",
      date:"26 Jul 2026",
      category:"Sales",
    },


    {
      id:2,
      question:"Show Profit",
      answer:"Profit margin improved by 8%.",
      date:"25 Jul 2026",
      category:"Finance",
    },


    {
      id:3,
      question:"Best Selling Products",
      answer:"Laptop and Mobile are top selling products.",
      date:"24 Jul 2026",
      category:"Products",
    },


    {
      id:4,
      question:"Monthly Sales",
      answer:"July sales are higher than June.",
      date:"23 Jul 2026",
      category:"Analytics",
    },


  ]);





  const [search,setSearch] = useState("");






  function deleteHistory(id:number){


    setHistory((prev)=>

      prev.filter(
        (item)=>item.id!==id
      )

    );


  }







  const filteredHistory = history.filter((item)=>

    item.question
    .toLowerCase()
    .includes(
      search.toLowerCase()
    )

  );







  const totalQueries = history.length;



  const todayQueries = history.filter(
    (item)=>item.date==="26 Jul 2026"
  ).length;




  const totalCategories = new Set(

    history.map(
      (item)=>item.category
    )

  ).size;









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







        {/* Header */}




        <div className="mb-8">


          <h1

            className="
            text-3xl
            font-bold
            text-gray-900

            dark:text-white
            "

          >

            Query History

          </h1>





          <p

            className="
            mt-2
            text-gray-600

            dark:text-gray-400
            "

          >

            View and manage your previous AI business queries.

          </p>



        </div>








        {/* Stats Cards */}





        <div

          className="
          mb-8
          grid
          gap-4
          sm:grid-cols-3
          "

        >




          <div

            className="
            rounded-2xl
            bg-white
            p-5
            shadow-md

            dark:bg-slate-900
            "

          >


            <p className="
            text-sm
            text-gray-500
            dark:text-gray-400
            ">

              Total Queries

            </p>


            <h2 className="
            mt-2
            text-3xl
            font-bold
            text-blue-600
            ">

              {totalQueries}

            </h2>



          </div>







          <div

            className="
            rounded-2xl
            bg-white
            p-5
            shadow-md

            dark:bg-slate-900
            "

          >


            <p className="
            text-sm
            text-gray-500
            dark:text-gray-400
            ">

              Today

            </p>



            <h2 className="
            mt-2
            text-3xl
            font-bold
            text-green-600
            ">

              {todayQueries}

            </h2>



          </div>







          <div

            className="
            rounded-2xl
            bg-white
            p-5
            shadow-md

            dark:bg-slate-900
            "

          >


            <p className="
            text-sm
            text-gray-500
            dark:text-gray-400
            ">

              Categories

            </p>



            <h2 className="
            mt-2
            text-3xl
            font-bold
            text-purple-600
            ">

              {totalCategories}

            </h2>



          </div>






        </div>









        {/* Search */}



        <HistorySearch

          search={search}

          setSearch={setSearch}

        />









        {/* History List */}





        <div

          className="
          mt-6
          space-y-5
          "

        >





          {

            filteredHistory.length===0


            ?


            (


              <div

                className="
                rounded-2xl
                bg-white
                p-8
                text-center
                text-gray-500
                shadow-md

                dark:bg-slate-900
                dark:text-gray-400
                "

              >

                No matching history found.


              </div>


            )



            :



            filteredHistory.map((item)=>(


              <HistoryCard


                key={item.id}


                item={item}


                onDelete={deleteHistory}


              />


            ))


          }





        </div>






      </motion.div>






    </main>



  );


}
