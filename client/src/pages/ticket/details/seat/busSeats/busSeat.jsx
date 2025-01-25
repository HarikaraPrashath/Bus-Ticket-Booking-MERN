import React, { useState, useEffect } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import busSeatData from ".././../../../../constants/busSeat/busSeat";
import { MdOutlineChair } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import ErrorMessage from "../../../../../components/errorMessage/showerror";

const BusSeat = () => {
  //Track seat section
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [error, setError] = useState(false);

  //toggle seat selection
  const handleSeatClick = (seatId) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        // Remove the seat if it's already selected
        return prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        // Show error if selecting more than 10 seats
        if (prevSelectedSeats.length >= 10) {
          setError(true);
          return prevSelectedSeats;
        } else {
          setError(false); // Clear error when within limits
          return [...prevSelectedSeats, seatId];
        }
      }
    });
  };

  //hide the error message after 10 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  //function for determining the seat status
  const getSeatName = (seat) => {
    if (seat.status === "Booked") {
      return "booked";
    }
    if (selectedSeats.includes(seat.id)) {
      return "text-yellow-600 cursor-pointer";
    }
    return "text-blue-600 cursor-pointer";
  };

  return (
    <div className="w-full grid grid-cols-5 gap-10">
      {/* seat layout */}
      <div className="col-span-3 w-full flex items-center justify-center shadow-sm rounded-xl p-4 border border-blue-200 ">
        <div className="w-full space-y-7 ">
          <p className="text-base text-blue-600 font-medium text-center">
            Click on available seats to reserve your seat
          </p>
          {/* seat layout */}
          <div className="w-full flex items-stretch gap-x-1.5">
            <div className="w-10 h-fit">
              <GiSteeringWheel className="text-3xl mt-7 text-primary rotate-90 " />
            </div>

            {/* seat rows */}
            <div className="flex flex-col items-center border-1.2 border-dashed border-blue-300 pl-7">
              <div className="flex-1 space-y-5">
                {/* first row */}
                <div className="w-full h-auto grid grid-cols-9 gap-x-5  justify-end">
                  {busSeatData.slice(0, 9).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-0"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-base text-blue-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl ${getSeatName(seat)}`}
                        style={{ transform: "scaleX(-1)" }}
                      />
                    </div>
                  ))}
                </div>
                {/* second row */}
                <div className="w-full h-auto grid grid-cols-9 gap-x-5  justify-end">
                  {busSeatData.slice(9, 18).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center -mt-3 gap-x-0"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-base text-blue-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl ${getSeatName(seat)} `}
                        style={{ transform: "scaleX(-1)" }}
                      />
                    </div>
                  ))}
                </div>
                {/* third row */}
                <div className="w-full h-auto grid grid-cols-9 gap-x-5  justify-end">
                  {busSeatData.slice(18, 27).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-0"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-base text-blue-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl ${getSeatName(seat)}`}
                        style={{ transform: "scaleX(-1)" }}
                      />
                    </div>
                  ))}
                </div>
                {/* forth row */}
                <div className="w-full h-auto grid grid-cols-9 gap-x-5  justify-end">
                  {busSeatData.slice(27, 36).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-0 -mt-3"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-base text-blue-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl ${getSeatName(seat)}`}
                        style={{ transform: "scaleX(-1)" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* reservation information */}
          <div className="w-full flex items-center justify-center gap-6 birder-t border-blue-200 pt-5 ">
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-3xl text-primary" />
              <p className="text-sm  font-medium ">Available</p>
            </div>
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-3xl" />
              <p className="text-sm  font-medium ">Not Available</p>
            </div>

            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-3xl text-yellow-500" />
              <p className="text-sm  font-medium ">Selected</p>
            </div>

            <div className="flex items-center gap-x-2">
              <MdPayment className="text-3xl " />
              <p className="text-sm  font-medium ">1200</p>
            </div>
          </div>
        </div>
      </div>

      {/* seat selection action */}
      <div className="col-span-2 w-full space-y-6  bg-blue-100  rounded-xl py-6 px-8 border border-gray-200 shadow-md">
        {/* Destination Section */}
        <div className="w-full space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-blue-700 font-bold">
              Your Destination
            </h1>
            <Link
              to="/busTicket"
              className="text-sm text-blue-500 font-medium hover:underline"
            >
              Change Route
            </Link>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-x-8">
              <p className="text-sm text-gray-600">
                From:{" "}
                <span className="font-medium text-gray-800">(Badulla)</span>
              </p>
              <p className="text-sm text-gray-600">
                To: <span className="font-medium text-gray-800">(Colombo)</span>
              </p>
            </div>
            <div className="flex items-center justify-between gap-x-8">
              <h1 className="text-sm text-gray-600">
                Badulla{" "}
                <span className="text-sm font-semibold text-blue-700">
                  (11.00 PM)
                </span>
              </h1>
              <h1 className="text-sm text-gray-600">
                Colombo{" "}
                <span className="text-sm font-semibold text-blue-700">
                  (5.00 AM)
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Seat Selection Section */}
        <div className="w-full space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-blue-700 font-bold">
              Your Seat Selection
            </h1>
            <span className="bg-red-100 text-red-600 font-medium text-xs py-1 px-2 rounded-md uppercase">
              No Refund
            </span>
          </div>
          {selectedSeats.length > 0 ? (
            <div className="flex flex-wrap items-center gap-3">
              {selectedSeats.map((seatId) => (
                <div
                  key={seatId}
                  className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-semibold text-lg shadow-sm"
                >
                  {seatId}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No Seat selected</p>
          )}
        </div>

        {/* Fare Details Section */}
        <div className="w-full space-y-4">
          <h1 className="text-lg text-blue-700 font-bold">Fare Details</h1>
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center border-l-2 border-blue-300 pl-4">
              <h3 className="text-sm text-gray-600 font-medium">Basic Fare</h3>
              <p className="text-sm text-gray-800 font-semibold">LKR 1200.00</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h3 className="text-sm text-gray-600 font-medium">
                  Total Price{" "}
                  <span className="text-xs text-gray-500 font-normal">
                    (includes all taxes)
                  </span>
                </h3>
              </div>
              <p className="text-lg text-blue-700 font-bold">
                LKR{" "}
                {selectedSeats.reduce((total, seatId) => {
                  const seat = busSeatData.find(
                    (busSeat) => busSeat.id === seatId
                  );
                  return total + (seat ? seat.Price : 0);
                }, 0)}
                .00
              </p>
            </div>
          </div>
        </div>
 
        {/* Checkout Section */}
        <div className="w-full">
          {selectedSeats.length > 0 ? (
            <Link
              to="/busTicket/checkout"
              className="w-full flex items-center justify-center bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </Link>
          ) : (
            <div className="space-y-2">
              <button
                disabled
                className="w-full flex items-center justify-center bg-gray-300 text-gray-500 font-bold py-3 rounded-lg shadow-md cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
              <p className="text-center text-sm text-gray-500">
                Please select at least one seat
              </p>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-sm text-red-600 font-medium">
            You can select only 10 seats.
          </div>
        )}
      </div>
    </div>
  );
};

export default BusSeat;
