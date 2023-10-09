import React from 'react'

const InputFlatBorder = ({ name, leftIcon, rightIcon, placeholder, label, ...props }) => {
  return (
    <div className='my-4' >
      <label htmlFor={name} className="block text-md font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2 border-0 bg-transparent h-[50px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          { leftIcon && leftIcon }
        </div>
        <input
          name={name}
          className="block w-full h-full bg-transparent outline-none border-b py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:border-indigo-600"
          placeholder={placeholder}
          {...props}
        />
        <div className="absolute inset-y-0 right-5 flex items-center">
          { rightIcon && rightIcon }
        </div>
      </div>
    </div>
  )
}

export default InputFlatBorder