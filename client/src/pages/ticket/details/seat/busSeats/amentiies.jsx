import React from 'react'
import { IoMdCheckboxOutline } from 'react-icons/io';


const Amentiies = () => {
  return (
    <div className='col-span-3 w-full '>
      <div className='w-full space-y-3'>
        <h1 className='text-lg text-blue-600 font-medium text-start'>Bus Amenities</h1>
      <div className='w-full grid grid-cols-2 gap-8'>
        <div className='col-span-1 w-full space-y-1'>
        
        <div className='flex items-center gap-x-2 w-full'>
            <IoMdCheckboxOutline
            className='w-6 h-6 text-green-500'
            />
            <p className='text-base text-blur-700 font-normal'>Best Ac</p>
        </div>
        
        <div className='flex items-center gap-x-2 w-full'>
            <IoMdCheckboxOutline
            className='w-6 h-6 text-green-500'
            />
            <p className='text-base text-blur-700 font-normal'>Wifi</p>
        </div>
        
        <div className='flex items-center gap-x-2 w-full'>
            <IoMdCheckboxOutline
            className='w-6 h-6 text-green-500'
            />
            <p className='text-base text-blur-700 font-normal'>Tv</p>
        </div>
        
        <div className='flex items-center gap-x-2 w-full'>
            <IoMdCheckboxOutline
            className='w-6 h-6 text-green-500'
            />
            <p className='text-base text-blur-700 font-normal'>Charging</p>
        </div>

        <div className='flex items-center gap-x-2 w-full'>
            <IoMdCheckboxOutline
            className='w-6 h-6 text-green-500'
            />
            <p className='text-base text-blur-700 font-normal'>Adjustable Seats</p>
        </div>


        </div>

        <div className='w-full col-span-1'></div>
      </div>
      </div>
    </div>
  )
}

export default Amentiies
