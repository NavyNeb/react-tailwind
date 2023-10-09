import React from 'react'
import InputFlat from './InputFlat'
import TableAdresse from './TableAdresse'

const PaymentInfoForm = () => {
        
  return (
    <div  >
        <h4 className='text-xl text-gray-800 mb-4' >Contact information</h4>
        <InputFlat label={"Email address"} />
        <div className='grid grid-cols-2 gap-3 mb-7' >
            <InputFlat label={"Telephone"} />
            <InputFlat label={"Zip Code"} />
        </div>
        <hr className='mb-10' />
        <h4 className='text-xl text-gray-800 mb-4' >Shipping information</h4>
        <div className='grid grid-cols-2 gap-3 mb-7' >
            <InputFlat label={"First Name"} />
            <InputFlat label={"Last Name"} />
        </div>
        <InputFlat label={"Company"} />
        <TableAdresse />
    </div>
  )
}

export default PaymentInfoForm