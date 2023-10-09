import React from 'react'
import CartItem from './CartItemFlat'
import ButtonFlat from './ButtonFlat'
import { Stack } from '@mui/material'

const OrderSummary = () => {
  return (
    <div>
        <h4 className='text-xl text-gray-800 mb-4' >Order Summary</h4>
        <div className="border-[1px] shadow-sm rounded-md border-slate-300 bg-white py-3" >
            <CartItem />
            <CartItem />
            <div className='p-5' >
                <div className='flex justify-between items-center mb-7' >
                    <h5 className='text-base text-gray-600' >Subtotal</h5>
                    <h5 className='text-md text-gray-800 ' >$64.00</h5>
                </div>
                <div className='flex justify-between items-center mb-7' >
                    <h5 className='text-base text-gray-600' >Shipping</h5>
                    <h5 className='text-md text-gray-800 ' >$5.00</h5>
                </div>
                <div className='flex justify-between items-center mb-7' >
                    <h5 className='text-base text-gray-600' >Taxes</h5>
                    <h5 className='text-md text-gray-800 ' >$4.00</h5>
                </div>
                <hr />
                <div className='flex justify-between items-center my-5' >
                    <h5 className='text-xl text-gray-900' >Total</h5>
                    <h5 className='text-lg text-gray-800 ' >$4.00</h5>
                </div>
            </div>
            <hr />
            <Stack direction = {'row'} justifyContent={'center'} alignItems={'center'} >
                <ButtonFlat title = {'Confirm order'} />
            </Stack>
        </div>
    </div>
  )
}

export default OrderSummary