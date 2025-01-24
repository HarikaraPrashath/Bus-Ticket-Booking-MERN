import React from 'react'
import ServiceCard from '../../../../components/service/serviceCard'
import Rootlayout from '../../../../layout/rootlayout'
import { RiRefund2Line, RiSecurePaymentLine } from 'react-icons/ri';
import { MdHeadsetMic } from "react-icons/md";

const service = () => {
  return (
    <div>
      <Rootlayout className="space-y-12 ">

        {/* Tag */}
        <div className='w-full flex items-center justify-center text-center'>
            <h1 className='text-3xl text-neutral-800 font-bold'>
                Our <span className='text-primary'>Service</span>
            </h1>
        </div>

        {/* Service Card */}
        <div 
        className='w-full grid grid-cols-3 gap-10 '
        >
        <ServiceCard icon={RiSecurePaymentLine} title={"Secure Payment"} desc={"Integrate secure payment gateway for user to pay for their ticket"}/>
        <ServiceCard icon={RiRefund2Line} title={"Refund Payment"} desc={"Offer options for the users to purchase refundable ticket with clear terms and conditions"}/>
        <ServiceCard icon={MdHeadsetMic} title={"24/7 Support"} desc={"Get Assistance support through Chat, Email, and Phone"}/>
        </div>

      </Rootlayout>
    </div>
  )
}

export default service
