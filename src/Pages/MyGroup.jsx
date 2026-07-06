import React from 'react'
import { Input } from "@heroui/react";
import { IoSearch } from "react-icons/io5";
import MyGroupCard from '../Component/MyGroupCard';

function MyGroup() {
  return (
     <>
      <div className="md:w-200 mx-auto w-full">
        <div className=" mb-3 md:mb-8 mt-2 md:mt-5 relative w-full md:w-100">
          <Input
            aria-label="Search"
            placeholder="Search here..."
            className="w-full md:w-100 py-3 rounded-full shadow-[0px_0px_10px_rgba(255,255,255,0.1)] pr-10 bg-surface text-white"
          />

          <IoSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 text-xl" />
        </div>

        <div className=" bg-surface  rounded-xl">
          <h5 className="text-2xl font-semibold pl-4 pt-5">Friend Request</h5>
          <div className=" mt-3 md:mt-5 flex flex-col w-full h-[75vh] overflow-y-auto scrollbar-none">

        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
        <MyGroupCard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyGroup