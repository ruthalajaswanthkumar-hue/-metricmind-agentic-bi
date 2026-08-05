"use client";


import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";

import { getUser } from "@/lib/auth";



export default function ProfileCard(){


const router = useRouter();


const [user,setUser]=useState<any>(null);



useEffect(()=>{


setUser(getUser());


},[]);




return (


<motion.div

whileHover={{
scale:1.02
}}

className="
rounded-2xl
bg-white
p-6
shadow-md
dark:bg-slate-900
"

>


<div className="
flex
items-center
gap-5
">


<div className="
flex
h-16
w-16
items-center
justify-center
rounded-full
bg-blue-600
text-2xl
text-white
">

<FaUser/>

</div>



<div>


<h2 className="
text-xl
font-semibold
text-gray-900
dark:text-white
">

{
user?.name || "User"
}

</h2>



<p className="
text-sm
text-gray-500
dark:text-gray-400
">

{
user?.email || "user@example.com"
}

</p>



</div>


</div>




<button

onClick={()=>router.push("/profile")}


className="
mt-5
rounded-xl
bg-blue-600
px-5
py-2
text-sm
font-medium
text-white
hover:bg-blue-700
"

>

Edit Profile


</button>



</motion.div>


);


}
