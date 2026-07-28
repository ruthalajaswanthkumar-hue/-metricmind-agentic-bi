"use client";


import {motion} from "framer-motion";


export default function ButtonAnimation({

children

}:{

children:React.ReactNode

}){


return(

<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:0.95
}}

className="
px-5
py-2
bg-blue-600
text-white
rounded-lg
"

>

{children}


</motion.button>


)

}
