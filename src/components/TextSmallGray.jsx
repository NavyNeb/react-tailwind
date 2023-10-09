import React from 'react'

const TextSmallGray = ({ content, style }) => {
  return (
    <h3 style={style} className="text-gray-500 text-sm font-normal " >{content}</h3>
  )
}

export default TextSmallGray;