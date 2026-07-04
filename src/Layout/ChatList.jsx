import React from 'react'
import MessageCard from '../Component/MessageCard'

function ChatList({setSelectedChat }) {
  return (
   <>
   <div className=" lg:w-100 h-[100vh] lg:h-[97vh] bg-surface rounded-[10px] flex flex-col">
  <h4 className="px-3 py-4 text-xl flex-shrink-0">
    All Chat
  </h4>

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