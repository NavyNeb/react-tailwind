import React from 'react'
import InputFlat from './InputFlat'
import ButtonFlat from './ButtonFlat'

const AddAddressForm = () => {
  return (
    <form>
        <InputFlat label={"Address"} placeholder={'address'} />
        <div className='grid grid-cols-2 gap-3 mb-7' >
            <InputFlat label={"Code"} placeholder={'code'} />
            <InputFlat label={"Arrondissement"} placeholder={'arrondissement'} />
        </div>
        <InputFlat label={"Department"} placeholder={'department'} />
        <InputFlat label={"Region"} placeholder={'region'} />
        <ButtonFlat title = {'Add address'} />
    </form>
  )
}

export default AddAddressForm