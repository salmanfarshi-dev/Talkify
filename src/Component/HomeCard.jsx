import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


function HomeCard({icon,tittle,number,status}) {
  return (
    <div className='bg-white w-50  md:w-100 py-6 px-6 shadow-lg rounded-3xl'>
       <div className="flex gap-x-6 items-center">

         <div className="bg-[#E0DBFA] flex justify-center items-center rounded-2xl  w-12 h-12">{icon}</div>

         <h2 className='text-[18px] text-black font-semibold'>{tittle}</h2>
        
       </div>
       <h2 className='text-3xl font-semibold text-black mt-4 mb-2'>{number}</h2>
       <p className='text-[16px] font-normal text-black/50'>{status}</p>

      <div className="flex items-center gap-2 mt-8">
  <a href="" className="text-[#FF8E53] text-[16px] font-medium leading-none">
    View All
  </a>

  <FaArrowRight className="text-[#FF8E53] text- shrink-0" />
</div>
    </div>
  )
}

export default HomeCard