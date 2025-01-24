import React from 'react'
import TicketCard from '../../../src/pages/Home/topSearch/Ticket/ticketCard'

const SearchResult = () => {
  return (
    <div
    className='w-full col-span-3 space-y-10 pt-11 '>
        <div className='space-y-6 '>
         <TicketCard
        busName="NCG Express"
        routeFrom="Badulla"
        routeTo="Colombo"
        timeDuration="5h 30m"
        price="2150"
        startTime="8:00 AM"
        endTime="1:30 PM"
      />

    <TicketCard
        busName="SuperLine Travels"
        routeFrom="Kandy"
        routeTo="Galle"
        timeDuration="4h 15m"
        price="1850"
        startTime="9:00 AM"
        endTime="1:15 PM"
      />
     </div>
    </div>
  )
}

export default SearchResult