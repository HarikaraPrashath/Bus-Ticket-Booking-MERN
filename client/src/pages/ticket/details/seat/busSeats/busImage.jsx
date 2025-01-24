import React from "react";

const BusImage = () => {
  return (
    <>
      <div className="w-full grid grid-cols-4 gap-5 items-center border-t border-blue-300 pt-7 pb-2 ">
        <div className="w-full rounded-xl overflow-hidden">
          <img
            src="https://www.vanhiresrilanka.com/images-vanhire/bus_for_hire/45seater/45Seater_Luxury_Bus_Colombo.jpg"
            className="w-full aspect-video object-cover object-center rounded-xl border border-blue-300 bg-blue-200/15"
            alt=""
          />
        </div>
      
        <div className="w-full rounded-xl overflow-hidden">
          <img
            src="https://www.vanhiresrilanka.com/images-vanhire/bus_for_hire/45seater/50seater_Luxury_Coach_Hire_SriLanka.jpg"
            className="w-full aspect-video object-cover object-center rounded-xl border border-blue-300 bg-blue-200/15"
            alt=""
          />
        </div>
     
        <div className="w-full rounded-xl overflow-hidden">
          <img
            src="https://www.vanhiresrilanka.com/images-vanhire/bus_for_hire/45seater/45Seats_Luxury_Bus_SriLanka_Inside.jpg"
            className="w-full aspect-video object-cover object-center rounded-xl border border-blue-300 bg-blue-200/15"
            alt=""
          />
        </div>
      
        <div className="w-full rounded-xl overflow-hidden">
          <img
            src="https://www.vanhiresrilanka.com/images-vanhire/bus_for_hire/45seater/48Seater_Bus_Luxury_SriLanka.jpg"
            className="w-full aspect-video object-cover object-center rounded-xl border border-blue-300 bg-blue-200/15"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BusImage;
