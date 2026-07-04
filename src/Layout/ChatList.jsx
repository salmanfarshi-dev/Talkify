import React from 'react'
import MessageCard from '../Component/MessageCard'

function ChatList() {
  return (
   <>
   <div className="w-100 h-[97vh] bg-surface rounded-[10px] flex flex-col">
  <h4 className="px-3 py-4 text-xl flex-shrink-0">
    All Chat
  </h4>

  <div className="flex-1 overflow-y-auto px-3 space-y-4 custom-scrollbar">
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
  </div>
</div>
   </>
  )
}

export default ChatList