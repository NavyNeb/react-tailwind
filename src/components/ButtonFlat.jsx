import React from 'react'

const ButtonFlat = ({ title, onClick, style }) => {
  return (
    <button
        type="button"
        className="inline-flex w-2/3 justify-center rounded-md border border-transparent bg-[#9C27B0] px-4 py-2 text-md font-medium text-white hover:bg-transparent hover:border hover:text-[#9C27B0] hover:border-[#9C27B0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C27B0] focus-visible:ring-offset-2 mx-auto my-4"
        onClick={onClick}
        style={style}
    >
        {title}
    </button>
  )
}

export default ButtonFlat;