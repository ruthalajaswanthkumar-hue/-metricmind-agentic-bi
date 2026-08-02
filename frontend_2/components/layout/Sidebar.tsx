"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


import {
  FaChartBar,
  FaRobot,
  FaHistory,
  FaFileAlt,
  FaCog,
  FaBolt,
  FaUserCircle,
} from "react-icons/fa";





const menuItems = [

  {
    name:"Dashboard",
    href:"/dashboard",
    icon:<FaChartBar />,
  },

  {
    name:"Ask AI",
    href:"/chat",
    icon:<FaRobot />,
  },

  {
    name:"History",
    href:"/history",
    icon:<FaHistory />,
  },

  {
    name:"Reports",
    href:"/reports",
    icon:<FaFileAlt />,
  },

  {
    name:"Settings",
    href:"/settings",
    icon:<FaCog />,
  },

];






export default function Sidebar(){


  const pathname = usePathname();




  return (


    <aside

      className="
      sticky
      top-0

      flex
      h-screen
      w-72
      flex-col

      border-r
      border-white/10

      bg-gradient-to-b
      from-slate-950
      via-slate-900
      to-slate-950

      text-white

      shadow-2xl
      "

    >






      {/* Logo */}



      <div

        className="
        border-b
        border-white/10

        p-6
        "

      >



        <motion.div


          initial={{
            opacity:0,
            y:-20,
          }}


          animate={{
            opacity:1,
            y:0,
          }}



          transition={{
            duration:0.5,
          }}



          className="
          flex
          items-center
          gap-4
          "

        >




          <div

            className="
            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-2xl

            bg-gradient-to-br
            from-blue-500
            via-indigo-500
            to-purple-600

            text-2xl

            shadow-lg
            "

          >

            <FaBolt />

          </div>






          <div>


            <h1 className="
            text-2xl
            font-extrabold
            ">

              MetricMind

            </h1>



            <p className="
            text-sm
            text-slate-400
            ">

              AI Business Intelligence

            </p>


          </div>




        </motion.div>



      </div>









      {/* Menu */}




      <nav

        className="
        flex-1
        px-4
        py-6
        "

      >


        <p

          className="
          mb-4
          px-3
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-slate-500
          "

        >

          Main Menu

        </p>







        <div className="space-y-3">


          {
            menuItems.map((item)=>(


              <motion.div


                key={item.name}


                whileHover={{
                  x:6,
                }}


                whileTap={{
                  scale:0.97,
                }}


              >



                <Link


                  href={item.href}


                  className={`

                  group

                  flex
                  items-center
                  gap-4

                  rounded-2xl

                  px-4
                  py-4

                  transition-all


                  ${
                    pathname===item.href

                    ?

                    "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl"

                    :

                    "text-slate-300 hover:bg-slate-800 hover:text-white"

                  }

                  `}


                >




                  <motion.div


                    animate={

                      pathname===item.href

                      ?

                      {
                        scale:1.1,
                      }

                      :

                      {
                        scale:1,
                      }

                    }


                    className={`

                    flex
                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-xl


                    ${
                      pathname===item.href

                      ?

                      "bg-white/20"

                      :

                      "bg-slate-800 group-hover:bg-slate-700"

                    }

                    `}


                  >


                    {item.icon}


                  </motion.div>







                  <span className="
                  font-medium
                  ">

                    {item.name}

                  </span>





                </Link>





              </motion.div>



            ))
          }



        </div>



      </nav>









      {/* User */}





      <div

        className="
        border-t
        border-white/10

        p-5
        "

      >



        <motion.div


          whileHover={{
            scale:1.03,
          }}



          className="
          flex
          items-center
          gap-4

          rounded-2xl

          bg-slate-800/70

          p-4
          "

        >




          <div className="
          text-4xl
          text-blue-400
          ">

            <FaUserCircle />

          </div>






          <div>


            <h3 className="font-semibold">

              Welcome Back

            </h3>



            <p className="
            text-sm
            text-slate-400
            ">

              Business Analyst

            </p>



          </div>




        </motion.div>




      </div>







    </aside>


  );


}
