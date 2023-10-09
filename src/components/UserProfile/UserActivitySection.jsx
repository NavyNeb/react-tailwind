import React from 'react'
import Card from '../common/Card'
import UserAvatarSection from './UserAvatarSection'
import HeadingFour from '../HeadingFour'
import TextSmallGray from '../TextSmallGray'

const userActivityData = [
    { value: "16", label: "All Orders" },
    { value: "02", label: "Awaiting Payments" },
    { value: "00", label: "Awaiting Shipment" },
    { value: "01", label: "Awaiting Delivery" },
]

const UserActivitySection = () => {
  return (
    <div className="my-2 bg-transparent grid grid-cols-1 gap-7 lg:grid-cols-2 " >
        <Card>
            <UserAvatarSection />
        </Card>    
        <div className="grid grid-cols-2 gap-7 xl:grid-cols-4 " >
            {
                userActivityData.map(({value, label}, index) => <Card key = {index+label} >
                <div className="flex flex-col justify-center items-center  " >
                    <HeadingFour style={{ color: `#9C27B0` }} content={value} />
                    <TextSmallGray content={label} style={{ textAlign: 'center' }} />
                </div>
            </Card> )
            }
            
        </div>
    </div>
  )
}

export default UserActivitySection