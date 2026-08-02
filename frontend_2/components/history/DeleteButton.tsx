"use client";


import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";



interface DeleteButtonProps {

  onDelete:()=>void;

}





export default function DeleteButton({

  onDelete,

}:DeleteButtonProps){



  return (


    <motion.button


      whileHover={{
        scale:1.1,
      }}


      whileTap={{
        scale:0.95,
      }}



      onClick={onDelete}



      className="
      flex
      h-10
      w-10
      items-center
      justify-center

      rounded-xl

      text-red-500

      transition

      hover:bg-red-100

      dark:hover:bg-red-900

      "


      title="Delete history"


    >


      <FaTrash />


    </motion.button>


  );

}
