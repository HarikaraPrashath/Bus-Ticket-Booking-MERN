import React from 'react'
import Payment from '../payment/payment'

const PassangerData = () => {
  return (
    <div className='w-full py-4 col-span-6 '>
      <h1 className='text-xl text-blue-700 font-semibold'>
        Passenger Information
     
      </h1>

      <div className='space-y-7'>
        <div className='w-full space-y-2'>
            <label htmlFor="fullName" className='text-sm font-medium
             text-blue-500 '>
                Full Name
             </label>
             <input type="text" 
             placeholder='e.g. John Doe '
             className='w-full h-14  px-4 bg-blue-100/40 focus:bg-blue-100/70 border birder-blue-400   rounded-xl focus:outline-none focus:border-blue-400 text-base text-blue-600 font-normal placeholder:text-blue-400' name="" id="" />
        </div>

        <div className='w-full space-y-2'>
            <label htmlFor="email" className='text-sm font-medium
             text-blue-500 '>
                E-mail
             </label>
             <input type="email" 
             placeholder='e.g. jon@gmail.com '
             className='w-full h-14  px-4 bg-blue-100/40 focus:bg-blue-100/70 border birder-blue-400   rounded-xl focus:outline-none focus:border-blue-400 text-base text-blue-600 font-normal placeholder:text-blue-400' name="" id="" />
        </div>

        <div className='w-full space-y-2'>
            <label htmlFor="phone" className='text-sm font-medium
             text-blue-500 '>
                Phone
             </label>
             <input type="Number" 
             placeholder='+94 77 123 4567 '
             className='w-full h-14  px-4 bg-blue-100/40 focus:bg-blue-100/70 border birder-blue-400   rounded-xl focus:outline-none focus:border-blue-400 text-base text-blue-600 font-normal placeholder:text-blue-400' name="" id="" />
        </div>
        <div className='w-full space-y-2'>
            <label htmlFor="pickup" className='text-sm font-medium
             text-blue-500 '>
                PickUp Station
             </label>
             <select name=""
              className='w-full h-14  px-4 bg-blue-100/40 focus:bg-blue-100/70 border birder-blue-400   rounded-xl focus:outline-none focus:border-blue-400 text-base text-blue-600 font-normal placeholder:text-blue-400'  id="">
                <option selected disabled>Choose Pick up point</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Galle">Galle</option>
                    <option value="Jaffna">Jaffna</option>
              </select>
        </div>
      </div>

      {/* Payment Method */}
      <Payment/>
    </div>
  )
}

export default PassangerData
