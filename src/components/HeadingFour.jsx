import React from 'react'

const HeadingFour = ({ content, style }) => {
  return (
    <h3  style={style} className="text-gray-700 text-lg font-normal line-clamp-1 truncate " >{content}</h3>
  )
}

export default HeadingFour