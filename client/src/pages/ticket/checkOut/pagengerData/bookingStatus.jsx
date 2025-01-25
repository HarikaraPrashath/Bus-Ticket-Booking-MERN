import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookingStatus = () => {
  return (
    <div className="w-full col-span-3 sticky top-20 space-y-7">
      <div className="w-full ng-blue-50 rounded-xl py-4 px-6 border border-blue-200 shadow-sm  space-y-5  ">
        <h1 className="text-lg text-blue-700 font-bold text-center border-b border-blue-200 pb-4 ">
          Your Ticket Booking Status
        </h1>
        <div className="space-y-5">
          <div className="space-y-2 w-full">
            <h1 className="text-base text-blue-700 font-medium">
              {" "}
              Your Destination
            </h1>
            <div className="flex items-center justify-between gap-x-8">
              <p className="text-sm  text-primary">
                From:{" "}
                <span className="font-medium  text-primary">(Badulla)</span>
              </p>
              <p className="text-sm text-primary">
                To: <span className="font-medium  text-primary">(Colombo)</span>
              </p>
            </div>
            <div className="flex items-center justify-between gap-x-8">
              <h1 className="text-sm  text-primary">
                Badulla{" "}
                <span className="text-sm font-semibold text-blue-700">
                  (11.00 PM)
                </span>
              </h1>
              <h1 className="text-sm  text-primary">
                Colombo{" "}
                <span className="text-sm font-semibold text-blue-700">
                  (5.00 AM)
                </span>
              </h1>
            </div>

            <div className="w-full flex items-center justify-between gap-x-4 !mt-1.5 ">
              <h1 className="text-sm text-blue-600 font-normal ">Bus No:</h1>
              <h1 className="text-base text-blue-600 font-medium ">
                (WP 5652 N)
              </h1>
            </div>
          </div>

          <div className="space-y-2 w-full">
            <h1 className="text-base text-blue-700 font-medium"> Your Seats</h1>

            <div className="w-full flex items-center gap-x-3">
              <div className="w-9 h-9 bg-blue-200/80 rounded-lg flex items-center justify-center text-base text-blue-700 font-semibold">
                A2
              </div>
              <div className="w-9 h-9 bg-blue-200/80 rounded-lg flex items-center justify-center text-base text-blue-700 font-semibold">
                A3
              </div>
              <div className="w-9 h-9 bg-blue-200/80 rounded-lg flex items-center justify-center text-base text-blue-700 font-semibold">
                A4
              </div>
            </div>
          </div>

          <div className="space-y-2 w-full">
            <h1 className="text-base text-blue-700 font-medium">
              {" "}
              Total Fair Price{" "}
            </h1>

            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h3 className="text-sm text-primary font-medium">
                  Total Price{" "}
                  <span className="text-xs text-primary font-normal">
                    (includes all taxes)
                  </span>
                </h3>
              </div>
              <p className="text-lg text-blue-700 font-bold">LKR 4300.00</p>
            </div>
          </div>
        </div>
        <div className="w-full px-1.5">
          <Link
            to="/busTicket/payment"
            className="w-full flex items-center gap-3 justify-center bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Proceed to Checkout
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingStatus;
