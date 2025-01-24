import React,{useState,useEffect,useRef} from 'react'

const TogggleButton = ({buttonText , buttonTextHidden , children}) => {
    const [isValid,setIsValid]= useState(true)
    const toggleRef = useRef(null)

    const toggleVisibility =() =>{
        setIsValid(!isValid)
    }

    //handle the click outSide the toggle button
    const handleOutSies =(e)=>{
        if(toggleRef.current && !toggleRef.current.contains(e.target)){
            setIsValid(false)

        }
    }

    useEffect(()=>{
        //add event listener
        document.addEventListener('mousedown',handleOutSies)
        return()=>{
            //remove event listener
            document.removeEventListener('mousedown',handleOutSies)
        }
    },[])


    return (
        <div className="w-full h-auto" ref={toggleRef}>
        <button
          className={`w-fit px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 border-2 ${
            isValid
              ? 'bg-primary text-white border-primary hover:bg-primary/90'
              : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'
          }`}
          onClick={toggleVisibility}
        >
          {isValid ? buttonTextHidden : buttonText}
        </button>
      
        {isValid && (
          <div className="mt-8 p-6 bg-blue-50 border border-blue-300 rounded-xl shadow-md">
            {children}
          </div>
        )}
      </div>
      
  )
}

export default TogggleButton
