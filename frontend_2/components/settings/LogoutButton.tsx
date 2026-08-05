"use client";


import { motion } from "framer-motion";
import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { logoutUser } from "@/lib/auth";



export default function LogoutButton(){


const router = useRouter();



function handleLogout(){


const confirmLogout =
window.confirm(
"Are you sure you want to logout?"
);



if(confirmLogout){


logoutUser();


alert(
"Logged out successfully"
);


router.push("/login");


}



}



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


<h2 className="
text-lg
font-semibold
text-gray-900
dark:text-white
">

Account

</h2>



<p className="
mt-1
text-sm
text-gray-500
dark:text-gray-400
">

Sign out from your MetricMind account.

</p>



<button

onClick={handleLogout}

className="
mt-5
flex
items-center
gap-3
rounded-xl
bg-red-600
px-5
py-3
text-white
hover:bg-red-700
"

>


<FaSignOutAlt/>

Logout


</button>


</motion.div>


);


}
