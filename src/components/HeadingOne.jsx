import React from 'react'

const HeadingOne = ({ content, style }) => {
  return (
    <h3 style={style} className="text-gray-900 text-xl font-medium mx-2 my-2 " >{content}</h3>
  )
}

export default HeadingOne