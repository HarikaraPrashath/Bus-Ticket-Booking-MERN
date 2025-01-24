import React, { useState } from 'react'
import { TbArrowsExchange } from "react-icons/tb";
import { motion } from 'framer-motion'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Search = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -800 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-5"
    >
      <div className="w-full flex items-center gap-6 justify-between">
        {/* From and To Section */}
        <div className="w-full flex items-center gap-6">

          {/* From Input */}
          <div className="w-1/4 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <span className="text-neutral-400">From</span>
            <input
              type="text"
              placeholder="Enter location"
              className="bg-transparent outline-none w-full text-neutral-800"
            />
            <FaLocationDot className='w-6 h-6 text-primary'/>
          </div>

          {/* To Input */}
          <div className="w-1/4 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <span className="text-neutral-400">To</span>
            <input
              type="text"
              placeholder="Enter location"
              className="bg-transparent outline-none w-full text-neutral-800"
            />
            <FaLocationDot className='w-6 h-6 text-primary'/>

          </div>

          {/* Exchange Button */}
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <TbArrowsExchange className="w-6 h-6 text-white" />
          </button>

          {/* Date Picker */}
          <div className="w-1/4 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select a date"
              className="w-full h-full bg-transparent outline-none text-neutral-800"
            />
          </div>

          {/* Search Button */}
          <button
            className="w-[170px] h-14 px-6 flex items-center justify-center rounded-lg bg-primary text-white font-medium hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
          > 
            <FaSearch className="w-6 h-6" />
            <span className='ml-3 text-xl'>Search</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Search;
