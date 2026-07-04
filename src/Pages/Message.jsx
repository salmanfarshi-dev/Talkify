import { useState } from "react";
import ChatList from "../Layout/ChatList";
import Messageing from "./Messageing";

function Message() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
     <section>
      {/* Mobile */}
      <div className="md:hidden">
        <ChatList />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-x-10">
        <ChatList setSelectedChat={setSelectedChat} />
        <Messageing selectedChat={selectedChat} />
      </div>
    </section>
  );
}

export default Message;