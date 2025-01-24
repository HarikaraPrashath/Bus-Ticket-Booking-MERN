import React, { useState } from 'react';
import PriceRangeSlider from '../../components/priceRange/priceRange';

const Filter = ({ className }) => {
    const [rangeValue, setRangeValue] = useState({
        min: 0,
        max: 100
    });

    const handleRangeChange = (value) => {
        setRangeValue({ value });
    };

    return (
        <div className={`w-full ${className} space-y-6 bg-white shadow-lg rounded-lg p-6 `}>            
            <h1 className='text-2xl font-bold text-gray-800 border-b pb-2'>
                Apply Filters
            </h1>

            {/* Price Filter */}
            <div className='w-full border border-gray-200 rounded-lg p-4 space-y-3'>
                <h2 className='text-lg font-semibold text-gray-700'>Price Range</h2>
                <div className='w-2/3 ml-7 -2'>
                    <PriceRangeSlider
                        min={1000}
                        max={3000}
                        onChange={handleRangeChange}
                    />
                </div><br className='item-center' />
                <p className='text-sm mb-3 text-black'>Selected range: ${rangeValue.min} - ${rangeValue.max}</p>
            </div>

            {/* Bus Ticket Filter */}
            <div className='w-full border border-gray-200 rounded-lg p-4 space-y-3'>
                <h2 className='text-lg font-semibold text-gray-700'>Bus Type</h2>

                <div className='space-y-2'>
                    {["AC Deluxe", "Tourist AC Deluxe", "Air Suspension", "Luxury AC Deluxe"].map((type, index) => (
                        <div key={index} className='flex items-center gap-3'>
                            <input
                                id={type.toLowerCase().replace(/ /g, '-')}
                                type="checkbox"
                                className='h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500'
                            />
                            <label
                                htmlFor={type.toLowerCase().replace(/ /g, '-')}
                                className='text-sm text-gray-600 cursor-pointer'
                            >
                                {type} <span className='text-xs text-gray-500'>(10)</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bus Route Filter */}
            <div className='w-full border border-gray-200 rounded-lg p-4 space-y-3'>
                <h2 className='text-lg font-semibold text-gray-700'>Bus Route</h2>

                <div className='space-y-2'>
                    {["Colombo-Badulla", "Colombo-Jaffna", "Colombo-Kandy", "Badulla-Panadura"].map((route, index) => (
                        <div key={index} className='flex items-center gap-3'>
                            <input
                                id={route.toLowerCase().replace(/ /g, '-')}
                                type="checkbox"
                                className='h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500'
                            />
                            <label
                                htmlFor={route.toLowerCase().replace(/ /g, '-')}
                                className='text-sm text-gray-600 cursor-pointer'
                            >
                                {route} <span className='text-xs text-gray-500'>(10)</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;
