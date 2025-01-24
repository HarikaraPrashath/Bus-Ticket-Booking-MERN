import React, { useEffect, useState } from 'react'

const Showerror = ({message}) => {
    const [isValid, setIsValid] = useState(true);
const [count, setCount] = useState(10);

useEffect(() => {
  if(count>0){
    const timer = setInterval(()=>{
        setCount(prev => prev - 1)
    },1000)
    return()=>{
        clearInterval(timer)
    }
  
  }
  else{
    setIsValid(false)
}
},[count])

if(!isValid){
    return null;
}


  return (
    <div className='flex top-28 p-4 right-4 mb-4 text-sm text-blue-50 bg-primary  rounded-xl shadow-lg transition-transform transform-gpu animate-slide-in  '>
      <div className='flex items-center justify-between '>
        <span>{message}</span>
        <span className='ml-4 font-bold '>{count}</span>
      </div>
    </div>
  )
}

export default Showerror
