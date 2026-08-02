"use client";


import { FaSearch } from "react-icons/fa";



interface SearchProps {

  search:string;

  setSearch:(value:string)=>void;

}





export default function HistorySearch({

  search,

  setSearch,

}:SearchProps){



  return (


    <div
      className="
      relative
      w-full
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


        placeholder="Search previous queries..."


        className="

        w-full

        rounded-2xl

        border
        border-gray-200

        bg-white

        py-3
        pl-12
        pr-5

        text-gray-900

        outline-none

        shadow-sm

        transition

        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-200


        dark:border-gray-700
        dark:bg-slate-900
        dark:text-white

        dark:focus:ring-blue-900

        "

      />



    </div>


  );

}
