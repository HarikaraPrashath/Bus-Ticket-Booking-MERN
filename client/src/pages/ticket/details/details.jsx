import React from 'react'
import Topplayout from '../../../layout/toppages/topplayout'
import Rootlayout from '../../../layout/rootlayout'
import { Link } from 'react-router-dom'
import AlterMessage from '../../Home/topSearch/alterMessage'
import BusSeat from './seat/busSeats/busSeat'
import TogggleButton from '../../../components/topSearch/TogggleButton'
import Amentiies from './seat/busSeats/amentiies'
import ReservationPolicy from './seat/busSeats/reservationPolicy'
import BusImage from './seat/busSeats/busImage'

const Details = () => {
  
  const message =(
    <>
      One individual only can book 10 seats .If want more that that plase <Link to={"/supportTeam"} className='text-yellow-700 font-bold'>Contact Our Team</Link>
    </>
  )
  return (
    <div className='w-full space-y-12 pb-16 mt-16 '> 
    {/* topLayout */}
    <Topplayout
    bgImage={"https://www.akinatours.com/wp-content/gallery/luxury-mini-coach/cache/Luxury-Mini-Coach-Interior-Blue-LEDs-Rack-1800x1200.jpg-nggid0221-ngg0dyn-1197x800x60-00f0w010c010r110f110r010t010.jpg"}
    title={"Bus Details"}
    />

    <Rootlayout
    className="space-y-12 w-full pb-16  "> 

    {/* seat layout action and details */}
    <div className='w-full space-y-8'>
     {/* warning message */}
      <AlterMessage message={message}/>

     {/* seat layout */}
     <BusSeat/>

    </div>

    {/* bus Details */}
    <div className='w-full flex items-center justify-center flex-col gap-8 text-center '>

      {/* short description of bus */}
      <p className='text-base text-blue-500 font-normal text-justify '>
      A luxury bus is a high-end mode of transportation designed for comfort, convenience, and premium travel experiences. These buses are often equipped with plush reclining seats, ample legroom, air conditioning, entertainment systems, Wi-Fi connectivity, and sometimes even personal charging ports. Many luxury buses also feature amenities like onboard restrooms, refreshments, and adjustable lighting to ensure a comfortable journey. They are commonly used for long-distance travel, corporate trips, and tourism, offering a blend of elegance, functionality, and relaxation.
     <span className='text-lg text-blue-600 font-medium ml-2 '>
      Want to see more about the bus ?
     </span>
      </p>

      {/* Button */}
      <div className='w-full items-center justify-center gap-6 flex-col '>
        <TogggleButton
        buttonText={'Show More'}
        buttonTextHidden={'Hide Bus Details'}
        >
          <div className='w-full space-y-10 '>
            {/* reservation details */}
          <div
          className='w-full grid grid-cols-7 gap-20 '
           >
            <Amentiies/>
            <ReservationPolicy/>
           </div>

            {/* bus image */}
            <BusImage/>

          </div>
        </TogggleButton>
      </div>
    </div>

    </Rootlayout>
    </div>
  )
}

export default Details
