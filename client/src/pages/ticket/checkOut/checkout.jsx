import React from 'react'
import Topplayout from '../../../layout/toppages/topplayout'
import Rootlayout from '../../../layout/rootlayout'
import PassangerData from './pagengerData/passangerData'
import BookingStatus from './pagengerData/bookingStatus'

const Checkout = () => {
  return (
    <div className='w-full space-y-12 pb-16 '>
      <Topplayout
    bgImage={"https://www.akinatours.com/wp-content/gallery/luxury-mini-coach/cache/Luxury-Mini-Coach-Interior-Blue-LEDs-Rack-1800x1200.jpg-nggid0221-ngg0dyn-1197x800x60-00f0w010c010r110f110r010t010.jpg"}
    title={"Bus Checkout"}
    />

    <Rootlayout
    className="space-y-12 w-full pb-16  ">

    <div className='w-full flex grid-cols-7 items-start gap-44 relative '>
            {/* passenger details */}
            <PassangerData/>
            {/* ticket report details */}
            <BookingStatus/>
    </div>

    </Rootlayout>
    
    </div>
  )
}

export default Checkout
