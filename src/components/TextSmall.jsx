import React from 'react'

const TextSmall = ({ content, style }) => {
  return (
    <h3 style={style} className="text-black text-sm font-normal " >{content}</h3>
  )
}

export default TextSmall