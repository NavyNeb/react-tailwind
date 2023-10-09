import React from 'react'
import Card from '../common/Card';
import userImg from '../../assets/userImage.jpg';
import InputFlatBorder from '../InputFlatBorder';
import ButtonFlat from '../ButtonFlat';

const UserEditProfile = ({ onBackClick, onSaveClick }) => {
  return (
    <Card style={{ margin: `20px 0px`, padding: `15px 20px` }} >
        <div>
            <div className="h-[fit-content] flex-1 flex flex-row justify-between items-start md:flex-row md:justify-between md:items-center" >
                <img src={userImg} className="h-16 w-16 rounded-full" alt='user avatar logo' />
                <ButtonFlat title={"Back To Profile"} onClick={onBackClick} style={{ width: 'fit-content' }} />
            </div>
            <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 mt-4 mb-6" >
                <InputFlatBorder label={"First Name"} placeholder={"Enter username here"} />
                <InputFlatBorder label={"Last Name"} placeholder={"Enter username here"} />
                <InputFlatBorder label={"Email"} placeholder={"Enter username here"} />
                <InputFlatBorder label={"Phone"} placeholder={"Enter username here"} />
            </div>
            <ButtonFlat style={{ width: 'fit-content' }} title={"Save Changes"} onClick={onSaveClick} />
        </div>
    </Card>
  )
}

export default UserEditProfile