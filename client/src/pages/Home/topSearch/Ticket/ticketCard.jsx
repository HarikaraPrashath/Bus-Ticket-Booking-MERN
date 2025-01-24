import React from 'react';
import { FaWifi, FaBus } from 'react-icons/fa';
import { GiWaterBottle, GiCharging } from 'react-icons/gi';
import { IoTv } from 'react-icons/io5';
import { Link } from 'react-router-dom';

// Facility Component
const Facility = ({ icon, label }) => (
  <div className="flex items-center space-x-2 text-white">
    <div className="p-2 bg-blue-700 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <p className="text-sm font-medium">{label}</p>
  </div>
);

const TicketCard = ({ busName, routeFrom, routeTo, timeDuration, price, startTime, endTime }) => {
  return (
    <div className="w-full max-w-full rounded-xl p-6 bg-gradient-to-br from-blue-500 to-blue-600 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-6">
      {/* Bus Information */}
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-2xl">{busName}</h1>
        <div className="flex gap-4">
          <Facility icon={<FaWifi />} label="Internet" />
          <Facility icon={<GiWaterBottle />} label="Snacks" />
          <Facility icon={<IoTv />} label="TV" />
          <Facility icon={<GiCharging />} label="Charging" />
        </div>
      </div>

      {/* Route and Time Information */}
      <div className="space-y-4">
        <div className=" p-4 rounded-lg flex items-center justify-between shadow-sm">
          <p className="text-lg font-medium text-white">
            From: <span className="font-semibold">{routeFrom}</span> <span>({startTime})</span>
          </p>
          <p className="text-lg font-medium text-white">
            To: <span className="font-semibold">{routeTo}</span> <span>({endTime})</span>
          </p>
        </div>
        <div className="relative flex items-center">
          <h1 className="text-lg font-bold text-white">{routeFrom}</h1>
          <div className="flex-1 mx-4 border-dashed border-t border-blue-400 relative">
            <p className="absolute w-fit px-3 h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full flex items-center justify-center text-sm text-white">
              <FaBus className="mr-1" /> {timeDuration}
            </p>
          </div>
          <h1 className="text-lg font-bold text-white">{routeTo}</h1>
        </div>
      </div>

      {/* Price and Action */}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">
          Rs. {price} <span className="text-sm">/per seat</span>
        </h1>
        <Link to="/busDetails" className="px-5 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
          Reserve Seat
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;
