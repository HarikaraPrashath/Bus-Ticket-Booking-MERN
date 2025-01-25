import React, { useRef } from "react";
import Topplayout from "../../../layout/toppages/topplayout";
import Rootlayout from "../../../layout/rootlayout";
import Passenger from "./passenger";
import CompanyDetails from "./companyDetails";
import { toPng } from "html-to-image";
import download from "downloadjs";

const TicketPrint = () => {
  const invoiceRef = useRef(null);
  const handleDownload = async () => {
    if (invoiceRef.current === null) return;
    try {
      //convert the invoice to image
      const dataUrl = await toPng(invoiceRef.current);

      //download the image
      download(dataUrl, "Invoice.png");
    } catch (e) {
      console.log("Error occure ", e);
    }
  };
  return (
    <div className="w-full space-y-12 pb-16 ">
      <Topplayout
        bgImage={
          "https://www.akinatours.com/wp-content/gallery/luxury-mini-coach/cache/Luxury-Mini-Coach-Interior-Blue-LEDs-Rack-1800x1200.jpg-nggid0221-ngg0dyn-1197x800x60-00f0w010c010r110f110r010t010.jpg"
        }
        title={"Payment Invoice"}
      />

      <Rootlayout className="space-y-12 w-full pb-16  ">
        <div className="w-full flex items-center justify-center">
          {/* invoice Card */}
          <div
            ref={invoiceRef}
            className="w-[90%] grid grid-cols-5 bg-white rounded-3xl border border-blue-200 shadow-sm relative"
          >
            {/* left side for passenger */}
            <Passenger />

            {/* right side for company */}
            <CompanyDetails />

            {/* Top cut circle */}
            <div className="absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-blue-50 border border-blue-50"></div>
            <div className="absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-blue-50 border border-blue-50"></div>

            {/* Bottom cut circle */}
            <div className="absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-blue-50 border border-blue-50"></div>
            <div className="absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-blue-50 border border-blue-50"></div>
          </div>

          {/* Download invoice card button */}
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            className="w-fit px-8 bg-primary text-blue-50 font-bold text-lg py-2 rounded-lg "
            onClick={handleDownload}
          >
            Download Invoice
          </button>
        </div>
      </Rootlayout>
    </div>
  );
};

export default TicketPrint;
