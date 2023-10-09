import React, { useState } from 'react'
import PageTitle from '../components/common/PageTitle'
import { BsFillPersonFill } from 'react-icons/bs'
import UserActivitySection from '../components/UserProfile/UserActivitySection'
import UserDetailsSection from '../components/UserProfile/UserDetailsSection'
import UserProfileSection from '../components/UserProfile/UserProfileSection'
import UserEditProfile from '../components/UserProfile/UserEditProfile'

const UserProfile = () => {
  const [Edit, setEdit] = useState(false)
  return (
    <div className="h-screen mx-auto w-full bg-[#F6F9FC] xs:px-4 " >
        <PageTitle 
          title={"My Profile"} 
          style={{ fontSize: 25 }} 
          btnText={"Edit profile"}
          onBtnClick={()=>setEdit(true)}
          btnStyle={{ margin: `0px 0px`, width: `fit-content`, }}
          icon={
            <BsFillPersonFill 
              color='#9C27B0' 
              size={22} 
            />
          }
        />
        { Edit ? <UserEditProfile /> : <UserProfileSection /> }
    </div>
  )
}

export default UserProfile