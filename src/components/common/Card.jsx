import React from 'react'

const Card = ({ children, style }) => {
  return (
    <div style={style} className="bg-white rounded-md shadow-md shadow-slate-100 drop-shadow-sm px-4 py-2 " >
        {children}
    </div>
  )
}

export default Card