import React from 'react'

const Text = ({ content, style }) => {
  return (
    <h3 style={style} className="text-black text-base font-normal " >{content}</h3>
  )
}

export default Text