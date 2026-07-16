import { useEffect, useState } from "react";
import ChatList from "../Layout/ChatList";
import Messageing from "./Messageing";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Message() {
  let data = useSelector((state) => state.activeuser.value);

  let navigate = useNavigate();

  useEffect(() => {
    if (data == null) {
      navigate("/login");
    }
  }, [data, navigate]);

  const [selectedChat, setSelectedChat] = useState(null);

  return (
     <section>
      {/* Mobile */}
      <div className="md:hidden ">
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