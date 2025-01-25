import React from 'react'
import {  IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'

const PaymentCard = ({
    selectedPayment,
    value,
    onChange,
    cardholderName,
    cardNumber,
    expiryDate,
    CardImage
}) => {
  return (
    <label className={`w-full flex items-end px-4 py-2 border-2 ${selectedPayment=== value ? "border-indigo-500/80 bg-indigo-500/15" : "border-blue-300  bg-blue-100/40"} rounded-xl relative  cursor-pointer`}>
      
      <div className='w-full flex items-center justify-between gap-7'>
        <div className='flex item-center gap-3'>
            <div className='w-fit h-16 rounded-lg'>
                <img src={CardImage} className='w-full object-contain object-center rounded-lg' alt="payment image" />
            </div>

            <div className='space-y-0.5'>
                <h1 className='text-base text-blue-600 font-medium'>{cardholderName}</h1>
                <p className='text-blue-500 text-sm font-normal'>
                    {cardNumber.slice(0,4)} **** **** {cardNumber.slice(12,16)}
                </p>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            {selectedPayment === value ? (
                <IoMdRadioButtonOn className='w-7 h-7 text-indigo-600'/>)
                :
              (<IoMdRadioButtonOff className='w-7 h-7 text-blue-1`00'/>
            )}
        </div>
      </div>

      {/* radio button */}
        <input 
        type="radio" 
        value={value} 
        checked={selectedPayment === value} 
        onChange={onChange} 
        className='hidden'/>
    </label>
  )
}

export default PaymentCard
