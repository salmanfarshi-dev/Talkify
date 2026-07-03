import React from "react";
import imag from "../assets/login.jpg";
import { GrHome } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";

function Sidebar() {
  return (
    <>
      <aside className="hidden md:flex fixed left-4 top-3 w-46.5 h-[97vh] bg-surface border border-border rounded-3xl flex-col justify-between items-center py-4">
        <div className="w-28 h-28 rounded-full overflow-hidden">
          <img src={imag} alt="" className="w-full h-full object-cover" />
        </div>

        <ul className="flex flex-col gap-y-10">
          <li className="text-text-primary text-4xl cursor-pointer hover:scale-110 duration-300">
            <GrHome />
          </li>

          <li className="text-text-primary text-4xl cursor-pointer hover:scale-110 duration-300">
            <AiOutlineMessage />
          </li>

          <li className="text-text-primary text-4xl cursor-pointer hover:scale-110 duration-300">
            <IoMdNotificationsOutline />
          </li>

          <li className="text-text-primary text-4xl cursor-pointer hover:scale-110 duration-300">
            <LuSettings />
          </li>
        </ul>

        <div className="text-text-primary text-4xl cursor-pointer hover:scale-110 duration-300">
          <HiOutlineLogout />
        </div>
      </aside>

      <aside className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] bg-[#FF8E53] rounded-full shadow-2xl px-6 py-4 flex justify-between items-center md:hidden z-50">
        <button className="text-text-primary text-2xl active:scale-90 duration-200">
          <GrHome />
        </button>

        <button className="text-text-primary text-2xl active:scale-90 duration-200">
          <AiOutlineMessage />
        </button>

        <button className="w-14 h-14 rounded-full bg-text-primary flex justify-center items-center shadow-xl -mt-10">
          <img
            src={imag}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
        </button>

        <button className="text-text-primary text-2xl active:scale-90 duration-200">
          <IoMdNotificationsOutline />
        </button>

        <button className="text-text-primary text-2xl active:scale-90 duration-200">
          <LuSettings />
        </button>
      </aside>
    </>
  );
}

export default Sidebar;
