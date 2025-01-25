import React from 'react'
import { FaPhone } from 'react-icons/fa6'

function CompanyDetails() {
  return (
    <div className='w-full col-span-1 border-dashed border-l-2 border-blue-400 relative rounded-br-3xl'>
        <div className="w-full bg-primary px-4 py-5 rounded-tr-3xl">
            <h1 className='text-2xl text-blue-50 font-bold text-center'>
                Bus Ticket
            </h1>
        </div>

        
        <div className='w-full px-4 py-7 space-y-1'>
            <p className='text-sm text-blue-600 font-normal'>
                BilNo : 342442
            </p>
            <p className='text-sm text-blue-600 font-normal'>
                Date : 2024-10-12
            </p>
            <p className='text-sm text-blue-600 font-normal'>
                Name : Harikara Prashath
            </p>
            <p className='text-sm text-blue-600 font-normal'>
                From : Badulla <span className='text-xs'>(Town)</span>
            </p>
            <p className='text-sm text-blue-600 font-normal'>
                Departure <span className='text-xs'>11.00 PM</span>
            </p>
            <p className='text-sm text-blue-600 font-normal'>
                Arrival <span className='text-xs'>04.45 AM</span>
            </p>
            <p className='text-sm text-blue-600 font-normal'>
                Passenger Seat <span className='text-xs'>A1 , A2 , A3</span>
            </p>
            <p className='text-sm text-blue-600 font-normal'>
                No seat <span className='text-xs'>3</span>
            </p>
            <p className='text-sm text-blue-600 font-normal'>
                Price <span className='text-xs'>6300</span>
            </p>
        </div>

        {/* Right Bottom section */}
        <div className='w-full bg-primary'>
            <div className="w-full bg-primary  absolute bottom-0 right-0 rounded-br-3xl flex items-center justify-between ">
                    <div className="flex items-center mx-4 gap-x-2">
                      <FaPhone className="w-3 h-3 text-blue-100" />
                      <p className="text-sm text-blue-100 py-2 ml-5 font-light ">
                        +94 72342 2343
                      </p>
                    </div>
                  </div>
        </div>
    </div>
  )
}

export default CompanyDetails
