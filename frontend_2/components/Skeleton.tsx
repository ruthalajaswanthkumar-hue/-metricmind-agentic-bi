"use client";


import { motion } from "framer-motion";


export default function Skeleton(){

return(

<motion.div

className="
space-y-4
animate-pulse
"

initial={{
opacity:0
}}

animate={{
opacity:1
}}

>


<div className="
h-6
bg-gray-300
rounded
w-3/4
"/>


<div className="
h-32
bg-gray-300
rounded
"/>


<div className="
h-6
bg-gray-300
rounded
w-1/2
"/>


</motion.div>

)

}
