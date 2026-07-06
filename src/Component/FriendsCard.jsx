import React from 'react'
import Image from "../assets/salman.jpeg";

function FriendsCard() {
  return (
   <div className="flex justify-between items-start border-b border-border hover:bg-secondary duration-200 px-4 py-6 pb-4">
      <div className="flex gap-x-4 items-center">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img
            src={Image}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-[16px] md:text-xl font-medium truncate w-30 lg:w-40">
            {" "}
            Salman Farshi
          </h2>
          <p className="font-sans text-sm w-30 lg:w-40 truncate md:text-[16px] text-text-secondary">
            lets talk dsfdsfdsfsfdsfsfsdfdsfds
          </p>
        </div>
      </div>
      <p className='text-sm md:text-[16px] text-text-secondary font-normal'>Today, 12:00pm</p>

      
    </div>
  )
}

export default FriendsCard