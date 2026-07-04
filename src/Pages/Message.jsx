import React from "react";
import ChatList from "../Layout/ChatList";
import image from "../assets/salman.jpeg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuVideo } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { Button } from "@heroui/react";

function Message() {
  return (
    <>
      <section>
        <div className="flex gap-x-10">
          <ChatList />

          <div className="border border-border rounded-[20px] w-full bg-background overflow-hidden relative">
            <div className="bg-surface py-7">
              <div className="flex justify-between px-4">
                <div className="flex gap-x-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={image} alt="" className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[16px] font-nunito text-text-primary font-semibold">
                      Salman farshi
                    </h4>
                    <p className="text-xs text-success font-normal">Online</p>
                  </div>
                </div>

                <div className="flex items-center gap-x-7">
                  <LuVideo className="text-xl" />
                  <IoCallOutline className="text-xl" />
                  <LuSearch className="text-xl" />
                  <BsThreeDotsVertical className="text-xl" />
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="bg-surface rounded-[10px] px-2 absolute bottom-2 lg:w-[96%] flex items-center">
                <div className="rounded w-8 h-8 bg-border flex justify-center items-center cursor-pointer">
                  <FaPlus />
                </div>
                <input
                  type="text"
                  placeholder="Type a message...."
                  className="w-full rounded-[10px] focus:outline-0 py-3 ml-5 placeholder:font-nunito text-white "
                />

                <div className="flex gap-x-3 items-center">
                  <BsEmojiSmile className="text-xl"/>

                  <Button className="rounded-[10px] px-6 bg-primary">
                    <RiSendPlaneFill className="size-6"/>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Message;
