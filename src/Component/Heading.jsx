import React from 'react'

function Heading({text, className}) {
  return (
    <h2 className={` text-[34px] font-nunito font-bold text-[#11175D] ${className}`}>{text}</h2>
  )
}

export default Heading