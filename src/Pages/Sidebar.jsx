import React from "react";
import imag from "../assets/login.jpg";
import { GrHome } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";


function Sidebar() {
  return (
    <section className="">
      <div className="w-46.5 Sidebar rounded-3xl flex flex-col justify-between items-center bg-[#FF8E53] h-[97vh] fixed pt-3 pb-3">
        <div className="w-30 h-30 bg-white rounded-full overflow-hidden">
          <img src={imag} alt="" className="w-full h-full object-cover" />
        </div>

        <div>
          <ul className="gap-y-10 flex flex-col">
            <li className="text-white text-4xl">
              <GrHome />
            </li>
            <li className="text-white text-4xl">
              <AiOutlineMessage />
            </li>
            <li className="text-white text-4xl">
              <IoMdNotificationsOutline />
            </li>
            <li className="text-white text-4xl">
              <LuSettings />
            </li>
          </ul>
        </div>
        <div className="">
         <ul>
           <li className="text-white text-4xl">
              <HiOutlineLogout />

            </li>
         </ul>
        </div>
      </div>
     
    </section>
  );
}

export default Sidebar;
