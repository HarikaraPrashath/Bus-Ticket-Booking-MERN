import React,{useState} from 'react'
import PaymentCard from '../../../../components/payment/paymentCard'
import  CardImage from '../../../../assets/mc_sym_debit_pos_54_1x.png'
import  CardVisa from '../../../../assets/icons8-visa-card-48.png'
import { FaP } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa'

const Payment = () => {
    const [selectedPaymentMethod , setSelectedPaymentMethod] = useState('')
    const handleChange = (e)=>{
        setSelectedPaymentMethod(e.target.value)
    }
    return (
    <div className='w-full space-y-3 '>
       <h6 className='text-sm text-blue-500 font-medium '>
        Select Your Payment Method
       </h6>
        <div className='w-full grid grid-cols-2 gap-10'>
            <PaymentCard
            selectedPayment={selectedPaymentMethod}
            value={'MasterCard'}
            onChange={handleChange}
            cardholderName={'John Doe'}
            cardNumber={'1234 5678 9012 3456'}
            CardImage={CardImage}
            />

            <PaymentCard
            selectedPayment={selectedPaymentMethod}
            value={'VisaCard'}
            onChange={handleChange}
            cardholderName={'John Doe'}
            cardNumber={'3876 5678 9834 3456'}
            CardImage={CardVisa}
            />
        </div>



        <div className='w-full flex justify-end'>
            <div className='w-fit flex item-center justify-center gap-x-2 cursor-pointer text-base font-normal  text-primary'>
                <FaPlus className='w-5 h-5 text-primary'/>
                <p className='capitalize '>Add new  Card </p>
            </div>
        </div>

    </div>
  )
}

export default Payment
