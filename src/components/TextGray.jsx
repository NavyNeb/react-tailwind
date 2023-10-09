import React from 'react'

const TextGray = ({ content, style }) => {
  return (
    <h3 style={style} className="text-gray-700 text-base font-normal " >{content}</h3>
  )
}

export default TextGray