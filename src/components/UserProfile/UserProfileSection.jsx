import React from 'react'
import UserActivitySection from './UserActivitySection'
import UserDetailsSection from './UserDetailsSection'
import InputFlatBorder from '../InputFlatBorder'

const UserProfileSection = () => {
  return (
    <div className="grid grid-cols-1 gap-10 " >
        <UserActivitySection />
        <UserDetailsSection />
    </div>
  )
}

export default UserProfileSection