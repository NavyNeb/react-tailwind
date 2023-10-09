import React from 'react'
import { BsTrash3 } from 'react-icons/bs'
import DropdownFlat from './DropdownFlat'
import { Stack } from '@mui/material'


const CartItemFlat  = () => {
  return (
    <div className="bg-white w-full p-3 h-[170px] border-b-[1px] my-2 border-slate-300 flex justify-items-center items-center " >
        <div className='w-[90] h-full bg-slate-100 rounded-md shadow-sm p-3' >
            <img src='https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg' className="h-full w-full" />
        </div>
        <div className="w-full h-full ml-2 flex justify-between" >
            <Stack direction={'column'} justifyContent={'space-between'} height={'100%'} >
                <div>
                    <h4 className="text-base text-gray-600 text-left mb-2">Basic tee</h4>
                    <h3 className="text-sm text-gray-500 text-left ">Basic tee</h3>
                    <h3 className="text-sm text-gray-500 text-left ">Large</h3>
                </div>
                <div className='relative' >
                    <h4 className="inline-block text-lg text-gray-800 align-baseline">$30.76</h4>
                </div>
            </Stack>
            <Stack direction={'column'} justifyContent={'space-between'} height={'100%'} >
                <div className="flex justify-end" >
                    <BsTrash3 size={20} className="text-slate-500 hover:text-slate-800 " />
                </div>
                <DropdownFlat />
            </Stack>
        </div>
    </div>
  )
}

export default CartItemFlat 