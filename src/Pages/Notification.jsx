import React from 'react'
import NotificationCard from '../Component/NotificationCard'
import { Input } from "@heroui/react";
import { IoSearch } from "react-icons/io5";



function Notification() {
  return (
    <>
    <div className="w-full">
       <div className="mb-8 mt-5 relative w-full">
        <Input
          aria-label="Search"
          placeholder="Search here..."
          className="w-full  py-3 rounded-full shadow-[0px_0px_10px_rgba(255,255,255,0.1)] pr-10 bg-surface text-white"
        />

        <IoSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 text-xl" />
      </div>


      <div className="w-full bg-surface px-4 py-8 rounded-2xl flex flex-col gap-y-4 h-[83vh] overflow-y-auto scrollbar-none">

    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
      </div>
    </div>
    
    </>
  )
}

export default Notification