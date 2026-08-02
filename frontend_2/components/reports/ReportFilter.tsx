"use client";


import { useState } from "react";
import { FaSearch } from "react-icons/fa";




export default function ReportFilter(){


  const [search,setSearch] = useState("");



  const [category,setCategory] = useState("All");




  return (


    <div

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
        flex-col
        gap-4

        sm:flex-row
        "

      >







        {/* Search */}




        <div

          className="
          relative
          flex-1
          "

        >



          <FaSearch

            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            "

          />




          <input


            value={search}


            onChange={(e)=>
              setSearch(e.target.value)
            }


            placeholder="Search reports..."


            className="

            w-full

            rounded-xl

            border
            border-gray-200

            bg-gray-50

            py-3
            pl-11
            pr-4


            text-gray-900

            outline-none

            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200


            dark:border-gray-700
            dark:bg-slate-800
            dark:text-white

            dark:focus:ring-blue-900

            "

          />



        </div>









        {/* Category Filter */}




        <select


          value={category}


          onChange={(e)=>
            setCategory(e.target.value)
          }



          className="

          rounded-xl

          border
          border-gray-200

          bg-gray-50

          px-4
          py-3

          text-gray-900

          outline-none


          dark:border-gray-700
          dark:bg-slate-800
          dark:text-white

          "


        >



          <option>
            All
          </option>


          <option>
            Sales
          </option>


          <option>
            Finance
          </option>


          <option>
            Customers
          </option>


        </select>





      </div>





    </div>


  );


}
