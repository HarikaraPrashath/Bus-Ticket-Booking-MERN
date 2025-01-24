import React from 'react'
import{motion} from "framer-motion"
import RootLayout from "../../../layout/rootlayout"
import Search from "../../../pages/Home/hero/search/search"


const hero = () => {
    const variants = {
        hidden:{opacity:0,y:-800},
        visible:{opacity:1,y:0}
    }

  return (
    <motion.div
    className="w-full flex-1 h-screen bg-cover bg-no-repeat bg-top relative "
    initial="hidden"
    animate="visible"
    exit={"hidden"}
    variants={variants}
    transition={{duration :0.85,ease:"easeInOut"}}
    style={{
      backgroundImage: `url('/src/assets/hero.png')`,
      width: '100%', // or any specific width like '500px'
      height: '800px', // or any specific height
      marginTop:'10px',
      alignItems:'center'
    }}>

      <RootLayout
      className="absolute top-0 left-0 w-full h-full py-[9ch] bg-gradient-to-b from-neutral-50/70  via-neutral-50/15 to-neutral-50/5 flex items-center justify-start text-center flex-col gap-9 "
      >
         {/* Title */}
          <div className='space-y-2  mt-[300px]'>
            <motion.p 
            initial={{opacity:0, y:-800}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-800}}
            transition={{duration:0.85,ease:"easeOut"}}
            className='text-lg text-black font-medium '>
              Get Your Tickets
            </motion.p>

            <motion.h1 
            initial={{opacity:0, y:-800}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-800}}
            transition={{duration:0.85,ease:"easeOut"}}
            className='text-5xl text-black font-bold capitalize'>
            Find best bus for you!
            </motion.h1>
          </div>

         {/* search section */}
         <Search/>
      </RootLayout>
    
    </motion.div>

  )
}

export default hero
