import React from 'react'
import MessageCard from '../Component/MessageCard'
import { Input } from '@heroui/react'
import { IoSearch } from "react-icons/io5";






function ChatList({setSelectedChat }) {
  return (
   <>
   <div className=" lg:w-100 h-[95vh] lg:h-[97vh] bg-surface rounded-[10px] flex flex-col">
  <h4 className="px-3 pt-4 text-xl flex-shrink-0">
    All Chat
  </h4>
 <div className="mb-8 mt-5 px-3 relative w-full md:w-72">
         <Input
           aria-label="Search"
           placeholder="Search here..."
           className="w-full md:w-72 py-3 rounded-full shadow-[0px_0px_10px_rgba(255,255,255,0.1)] pr-10 bg-surface text-white"
         />
 
         <IoSearch className="absolute top-1/2 -translate-y-1/2 right-7 md:right-0 text-gray-400 text-xl" />
       </div>

  <div className="flex-1 overflow-y-auto px-3 space-y-4 custom-scrollbar">
    <MessageCard  id={1}
    setSelectedChat={setSelectedChat}/>
    <MessageCard  id={2}
    setSelectedChat={setSelectedChat}/>
    <MessageCard  id={3}
    setSelectedChat={setSelectedChat}/>
    <MessageCard  id={4}
    setSelectedChat={setSelectedChat}/>
    <MessageCard  id={5}
    setSelectedChat={setSelectedChat}/>
    <MessageCard  id={6}
    setSelectedChat={setSelectedChat}/>
    <MessageCard  id={7}
    setSelectedChat={setSelectedChat}/>
    <MessageCard  id={8}
    setSelectedChat={setSelectedChat}/>
    
  </div>
</div>
   </>
  )
}

export default ChatList