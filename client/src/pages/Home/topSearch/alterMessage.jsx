import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6'

const AlterMessage = ({message}) => {
    const[isVisible,setIsVisible]=useState(true) 
    const handleClose =()=>{
        setIsVisible(false)
    }

    if(!isVisible){
        return null;
    }
    return (
    <div className='flex items-center justify-between p-4 text-sm text-yellow-600 bg-yellow-100 rounded-xl  ' role='alert'>
     <span>{message}</span>
     <button className='ml-4 text-primary hover:text-primary/90 '
     onClick={handleClose}
     aria-label='close'
     >
        <FaX className='w-3 h-4'/>
     </button>
    </div>
  )
}

export default AlterMessage