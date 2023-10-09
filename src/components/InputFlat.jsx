import React from 'react'

const InputFlat = ({ name, type, leftIcon, rightIcon, placeholder, label, ...props }) => {
  return (
    <div className='my-4' >
      <label htmlFor={name} className="block text-md font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2 border-0 rounded-xl shadow-sm bg-gray-100 h-[50px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          { leftIcon && leftIcon }
        </div>
        <input
          type={type}
          name={name}
          className="block w-full h-full bg-transparent rounded-xl outline-none border-0 py-1.5 pl-7 pr-20 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-[#9C27B0] placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder={placeholder}
            {...props}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          { rightIcon && rightIcon }
        </div>
      </div>
    </div>
  )
}

export default InputFlat