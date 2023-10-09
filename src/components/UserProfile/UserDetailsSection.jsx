import React from 'react'
import Card from '../common/Card'
import HeadingFour from '../HeadingFour'
import TextSmallGray from '../TextSmallGray'

const userDetailsData = [
    {
        label: "First Name",
        value: "Nick"
    },
    {
        label: "Last Name",
        value: "DuBuque"
    },
    {
        label: "Email",
        value: "Jayden.Gislason78@gmail.com"
    },
    {
        label: "Phone",
        value: "(445) 653-3771 x985"
    },
]

const UserDetailsSection = () => {
  return (
    <Card style={{ padding: `20px` }} >
        <div className="grid grid-cols-1 xl:grid-cols-4 " >
            {
                userDetailsData.map(({value, label}) => <div 
                className="flex flex-col justify-center items-center w-[fit-content] my-2 " >
                <TextSmallGray 
                    content={label} 
                    style={{ textAlign: 'left', width: '100%',}} 
                />
                <HeadingFour 
                    content={value} 
                    style={{ textAlign: 'left',width: '100%'}}
                />
            </div>)
            }
        </div>
    </Card>
  )
}

export default UserDetailsSection