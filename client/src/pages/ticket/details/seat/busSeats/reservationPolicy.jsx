import React from 'react'

const ReservationPolicy = () => {
  return (
    <div className='col-span-4 w-full border-1 border-blue-300 pl-5'>
        <div className='w-full space-y-33 text-left '>
            <h1 className='text-lg text-blue-600 font-medium text-start'>
                Reservation Policy
            </h1>

            <ul className='w-full list-disc list-outside space-y-2 px-4'>
            <li className='text-sm text-blue-500 font-normal '>Users can reserve up to 10 seats per booking.</li>
            <li className='text-sm text-blue-500 font-normal '>Real-time seat availability is displayed during the reservation process..</li>
            <li className='text-sm text-blue-500 font-normal '>Exceeding the 10-seat limit will result in an error message.</li>
            <li className='text-sm text-blue-500 font-normal '>Cancellations or modifications must be made within the allowed time frame.</li>
            <li className='text-sm text-blue-500 font-normal '>            <li className='text-sm text-blue-500 font-normal '>Cancellations or modifications must be made within the allowed time frame.</li>
            </li>

            </ul>
        </div>
    </div>
  )
}

export default ReservationPolicy
