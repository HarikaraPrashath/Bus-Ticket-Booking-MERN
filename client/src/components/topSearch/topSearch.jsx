import React from 'react';
import { FaWifi } from 'react-icons/fa';
import { GiWaterBottle, GiCharging } from 'react-icons/gi';
import { IoTv } from 'react-icons/io5';

const TopSearch = ({ routeFrom, routeTo, timeDuration, price }) => {
  return (
    <div className="w-full rounded-xl p-6 bg-blue-600 shadow-md space-y-8">
      {/* Route Information */}
      <div className="space-y-4">
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-blue-200 font-medium">From</p>
          <p className="text-sm text-blue-200 font-medium">To</p>
        </div>
        <div className="w-full flex items-center gap-x-3">
          <h1 className="text-lg font-bold text-white">{routeFrom}</h1>
          <div className="flex-1 relative border-dashed border-t border-blue-400">
            <p className="absolute w-fit px-3 h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full flex items-center justify-center text-sm text-white">
              {timeDuration}
            </p>
          </div>
          <h1 className="text-lg font-bold text-white">{routeTo}</h1>
        </div>
      </div>

      {/* Facilities */}
      <div className="w-full flex items-center gap-4 flex-wrap">
        <Facility icon={<FaWifi />} label="Internet" />
        <Facility icon={<GiWaterBottle />} label="Snacks" />
        <Facility icon={<IoTv />} label="TV" />
        <Facility icon={<GiCharging />} label="Mobile Charging" />
      </div>

      {/* Price and Button */}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Rs.{price}</h1>
        <button className="px-5 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
          Reserve Seat
        </button>
      </div>
    </div>
  );
};

const Facility = ({ icon, label }) => (
  <div className="flex items-center gap-x-2">
    <div className="text-blue-200">{icon}</div>
    <p className="text-sm text-blue-100">{label}</p>
  </div>
);

export default TopSearch;
