import React from 'react'
import PaymentInfoForm from './paymentInfoForm'
import OrderSummary from './OrderSummary'

const CheckoutWrapper = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1 md:gap-7 lg:gap-10 border-[1px] shadow-sm rounded-md border-slate-300 bg-gray-50 py-7 px-4 my-10 mx-3' >
        <PaymentInfoForm />
        <OrderSummary />
    </div>
  )
}

export default CheckoutWrapper