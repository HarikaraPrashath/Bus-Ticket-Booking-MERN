import React from 'react'
import Topplayout from '../../../layout/toppages/topplayout'
import Rootlayout from '../../../layout/rootlayout'
import {motion} from 'framer-motion'
import Search from '../hero/search/search'
import Filter from '../../ticket/filter'
import SearchResult from '../../ticket/searchResult'

const Ticket = () => {
  return (
    <div className='w-full space-y-12 pb-16 mt-16 '> 
      {/* topLayout */}
      <Topplayout
      bgImage={"https://www.akinatours.com/wp-content/gallery/luxury-mini-coach/cache/Luxury-Mini-Coach-Interior-Blue-LEDs-Rack-1800x1200.jpg-nggid0221-ngg0dyn-1197x800x60-00f0w010c010r110f110r010t010.jpg"}
      title={"Reserve your ticket"}
      />

      <Rootlayout
      className="space-y-12 relative">  
       {/* search section */}
       <div className="space-y-5 w-full bg-neutral-100 flex  py-4 items-center justify-center flex-col sticky top-0 z-30 ">
       <motion.h1
          initial={{ opacity: 0, y: -800 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -800 }}
          transition={{ duration: 1.35, ease: 'easeOut' }}
          className="text-5xl text-black font-bold capitalize drop-shadow-md"
        >
          Want to change the route?
        </motion.h1>

        {/* search */}
        <Search/>
       </div>

       {/* search bus ticket */}
       <div className='w-full h-auto grid grid-cols-4 gap-16 relative'>
        {/* filter section */}
        <div className='col-span-1'>
            <Filter className="space-y-4 sticky  top-52 z-20"/>
        </div>
        {/* search Ticket */}
        <SearchResult/>

       </div>

      </Rootlayout>
    </div>
  )
}

export default Ticket
