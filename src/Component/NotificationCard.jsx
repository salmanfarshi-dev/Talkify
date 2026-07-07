import React from 'react'
import { FaBell } from "react-icons/fa";


function NotificationCard() {
  return (
    <div className='flex gap-x-6 items-center border-b pb-4 border-border'>
        <div className="">
            <FaBell className='text-text-secondary'/>

            </div> 
           <p className='text-text-secondary text-sm md:text-[16px] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sint praesentium odio, incidunt possimus nsequatur ipsam. Sint, ratione commodi delectus ipsa quia omnis at non ipsum facilis nam nemo pariatur ab expedita!</p>
    </div>
  )
}

export default NotificationCard