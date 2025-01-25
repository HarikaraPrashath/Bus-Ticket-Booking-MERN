import React from "react";
import printBus from "../../../assets/printBus.png";
import { FaCircleCheck, FaPhone } from "react-icons/fa6";
import QrCode from "../../../assets/QrCode.png";
const Passenger = () => {
  return (
    <div className="w-full col-span-4 rounded-3xl relative">
      {/* Top bus details */}
      <div className="w-full flex items-center justify-between bg-primary px-6 py-3 rounded-tl-3xl">
        <div className="flex items-center gap-x-3">
          <img
            src={printBus}
            className="w-auto h-12 object-cover object-center"
            alt=""
          />
          <h1 className="text-xl text-blue-50 font bold uppercase tracking-wider pt-1">
            NCC Express
          </h1>
        </div>
        <div className="flex item-center gap-x-2 ">
          <p className="text-xl text-blue-50 font bold">
            <span className="text-lg">(Bus No .)</span>
            WP 2342 N
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols5 gap-8 item-center px-5 py-7 mb-7 ">
        {/* Bill No and per seat  */}
        <div className="w-full flex item-center justify-between border-dashed border-b-2 border-blue-200 pb-3 ">
          <p className="text-base text-blue-500 font-normal">Bill No : 3563</p>
          <p className="text-base text-blue-500 font-normal">
            LKR 2344 <span className="text-xs">/seat</span>
          </p>
          <p className="text-base text-blue-500 font-normal">Date 2024-12-12</p>
        </div>

        {/* Passenger Details */}
        <div className="w-full flex items-center justify-between">
          <div className="space-y-1.5">
            <p className="text-base text-blue-500 font-normal">
              Name of Passenger :{" "}
              <span className="font-medium ">Harikara Prasadh</span>
            </p>
            <p className="text-base text-blue-500 font-normal">
              Total seat Number :{" "}
              <span className="font-medium ">A2 ,A1 ,A3</span>
            </p>
            <p className="text-base text-blue-500 font-normal">
              Total Number of Passenger :{" "}
              <span className="font-medium ">3 only</span>
            </p>

            <p className="text-base text-blue-500 font-normal">
              Pick up Point : <span className="font-medium ">Kandy</span>
            </p>
            <p className="text-base items-center text-blue-600 font-normal">
              Total Price :
              <span className=" mx-1 text-1 text-blue-600 font-bold">
                LKR 3244
              </span>
            </p>
          </div>

          <div className="space-y-4 flex items-center justify-center flex-cols">
            <div className="space-y-1 text-center">
              <div className="col-span-1 border border-blue-200 round-xl  shadow-sm p-1 ">
                <img
                  src={QrCode}
                  className="w-30 h-30 aspect-square object-cover object-center rounded-xl "
                  alt=""
                />
              </div>
              <br />
              <div className="w-fit px-3 rounded-full bg-green-500/5 border-green-600 text-green-600 text-sm font-medium flex items-center justify-center gap-2">
                <FaCircleCheck size={20} />
                <br />
                <span>Paid</span>
              </div>
            </div>
          </div>
        </div>

        {/* Route Details */}
        <div className="w-full flex item-center justify-between border-dashed border-t-2 border-blue-200 pt-3 ">
          <p className="text-base text-blue-600 font-normal">
            Badulla
            <span className="text-blue-400">-----</span>
            Colombo
          </p>
          <p className="text-base text-blue-600 font-normal">
            Arrive at 11:00 PM
          </p>
          <p className="text-base text-blue-600 font-normal">
            Departure at 04:45 AM
          </p>
        </div>
      </div>

      {/* left bottom section */}
      <div className="w-full bg-primary  absolute bottom-0 left-0 rounded-bl-3xl flex items-center justify-between ">
        <p className="text-xs text-blue-100 py-2 mx-4 font-light ">
          Note : 40% charging for cancellation price 24h of programme
        </p>
        <div className="flex items-center mx-4 gap-x-2">
          <FaPhone className="w-3 h-3 text-blue-100" />
          <p className="text-sm text-blue-100 py-2 ml-5 font-light ">
            +94 72342 2343 , +94 72342 2777
          </p>
        </div>
      </div>
    </div>
  );
};

export default Passenger;
