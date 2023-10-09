import React from 'react'
import HeadingTwo from '../HeadingTwo'
import TextGray from '../TextGray'
import Text from '../Text'
import HeadingFour from '../HeadingFour'
import TextSmallGray from '../TextSmallGray'
import TextSmall from '../TextSmall'
import HeadingThree from '../HeadingThree'
import userImg from '../../assets/userImage.jpg'

const UserAvatarSection = () => {
  return (
    <div className="flex flex-row justify-between items-center h-full " >
            <img src={userImg} className="h-16 w-16 rounded-full" alt='user avatar logo' />
            <div className="h-[fit-content] flex-1 ml-2 flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center" >
                <div className='' >
                  <HeadingFour content={"Nick DuBuque"} />
                  <div className='flex flex-row justify-start items-center' >
                      <TextSmallGray content={'Balance'} /> :
                      <TextSmall content={"123 500 CFA"} style={{ color: `#9C27B0`, marginLeft: 4 }} />
                  </div>
                </div>
                <HeadingFour style={{ color: "silver" }} content={'SILVER USER'} /> 
            </div>
        
    </div>
  )
}

export default UserAvatarSection