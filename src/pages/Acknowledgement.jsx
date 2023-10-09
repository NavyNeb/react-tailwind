import { Stack } from '@mui/material'
import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import HeadingOne from '../components/HeadingOne'
import HeadingTwo from '../components/HeadingTwo'
import HeadingThree from '../components/HeadingThree'
import HeadingFour from '../components/HeadingFour'
import Text from '../components/Text'
import TextGray from '../components/TextGray'
import TextSmallGray from '../components/TextSmallGray'
import TextSmall from '../components/TextSmall'

const Acknowledgement = () => {
  return (
    <div className="container w-1/2 mx-auto my-[20px] relative p-[10px] h-[fit-content] border-[1px] shadow-sm rounded-md border-slate-300 " >
        <Stack direction={'row'} alignItems={'center'} >
            <BsInfoCircle />
            <HeadingOne content={"Your order is pending"} />
        </Stack>
        <div className=' ' >
            <Text content={"We have sent an email (sms, chat message) with instructions on how to finalize your payment to clientaddress@emial.com (600000089 or username)"} />
            <div >
                <Stack my={1.5} direction = "row" justifyContent={"space-between"} alignItems={"center"} >
                    <HeadingTwo content={"Order reference: "} />
                    <HeadingThree content={"af1234"} />
                </Stack>
                <Stack my={1.5} direction = "row" justifyContent={"space-between"} alignItems={"center"} >
                    <HeadingTwo content={"The order needs to be: "} />
                    <HeadingThree content={"48hours"} />
                </Stack>
                <Stack my={1.5} direction = "row" justifyContent={"space-between"} alignItems={"center"} >
                    <HeadingTwo content={"If your do not pay in required time:"} />
                    <HeadingThree content={"Order cancelled"} />
                </Stack>
                <Stack my={1.5} direction = "row" justifyContent={"space-between"} alignItems={"center"} >
                    <HeadingTwo content={"Please note that: "} />
                    <HeadingThree content={"Cash payment"} />
                </Stack>
                <HeadingOne content={"Payment details"} style={{ color: '#000', margin: '4px 0px' }} />
                <Stack my={1.5} direction = "row" justifyContent={"space-between"} alignItems={"center"} >
                    <HeadingTwo content={"Payment method: "} />
                    <HeadingThree content={"Pay at branch"} />
                </Stack>
                <Stack my={1.5} direction = "row" justifyContent={"space-between"} alignItems={"center"} >
                    <HeadingTwo content={"Total price: "} />
                    <HeadingThree content={"XAF 120 000"} />
                </Stack>
                <Stack my={1.5} direction = "row" justifyContent={"space-between"} alignItems={"center"} >
                    <HeadingTwo content={"Minimum payment: "} />
                    <HeadingThree content={"XAF 80 000"} />
                </Stack>
            </div>
        </div>
    </div>
  )
}

export default Acknowledgement