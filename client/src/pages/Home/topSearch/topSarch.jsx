import React from 'react'
import Rootlayout from '../../../layout/rootlayout'
import TopSearch from '../../../components/topSearch/topSearch'

const topSarch = ()=> {
  return (
    <Rootlayout
    className="space-y-12"
    >
    {/* Tag */}
    <div className='w-full flex items-center justify-center text-center'>
      <h1 className='text-3xl text-neutral-800 font-bold'>
         Top Search <span className='text-primary'>Routes</span>
      </h1>
     </div>
    
     {/* Top Search Ticket */}
     <div className='w-full grid grid-cols-3 gap-5'>
     <TopSearch routeFrom={"Badulla"} routeTo={"Colombo"} timeDuration={"5h 30m"} price={"2150"}/>
     <TopSearch routeFrom={"Trincomali"} routeTo={"Colombo"} timeDuration={"7h 30m"} price={"3100"}/>
     <TopSearch routeFrom={"Jaffna"} routeTo={"Colombo"} timeDuration={"6h 30m"} price={"2050"}/>
     <TopSearch routeFrom={"Badulla"} routeTo={"Jaffna"} timeDuration={"3h 30m"} price={"2000"}/>
     <TopSearch routeFrom={"Colombo"} routeTo={"Passara"} timeDuration={"7h 30m"} price={"2750"}/>
     <TopSearch routeFrom={"Colombo"} routeTo={"Galle"} timeDuration={"3h 30m"} price={"1550"}/>
     </div>
    </Rootlayout>
  )
}

export default topSarch