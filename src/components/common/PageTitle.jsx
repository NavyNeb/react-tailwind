import React from 'react'
import HeadingOne from '../HeadingOne'
import ButtonFlat from '../ButtonFlat'

const PageTitle = ({ icon, title, btnText, onBtnClick, btnStyle, style }) => {
  return (
    <div className="md:flex md:flex-row md:justify-between md:items-center py-2 mb-4 " >
        <div className="flex flex-row justify-start items-center" >
          <div className="ml-3 bg-white " >
            { icon && icon }
          </div>
          <HeadingOne style={style} content={title} />
        </div>
        <ButtonFlat title={btnText} onClick={onBtnClick} style={btnStyle} />
    </div>
  )
}

export default PageTitle