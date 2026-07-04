import React from "react";
import imag from "../assets/login.jpg";
import { GrHome } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";




const menu = [
  {
    path: "home",
    icon: GrHome,
  },
  {
    path: "message",
    icon: AiOutlineMessage,
  },
  {
    path: "notification",
    icon: IoMdNotificationsOutline,
  },
  {
    path: "setting",
    icon: LuSettings,
  },
];



function Sidebar() {

const location = useLocation();
const active = location.pathname.replace("/", "");



  return (
    <>
      <aside className="hidden md:flex fixed left-4 top-3 w-46.5 h-[97vh] bg-surface border border-border rounded-3xl flex-col justify-between items-center py-4 overflow-hidden">
        <div className="w-28 h-28 rounded-full overflow-hidden">
          <img src={imag} alt="" className="w-full h-full object-cover" />
        </div>

        <ul className="flex flex-col gap-y-10">
  {menu.map((item, index) => {
    const Icon = item.icon;

    return (
      <Link key={index} to={`/${item.path}`}>
        <li
          className={`
            relative flex items-center
            text-4xl cursor-pointer duration-300
            z-10
            after:absolute
            after:top-1/2
            after:-translate-y-1/2
            after:-left-5
            after:w-32
            after:h-16
            after:rounded-l-xl
            after:content-['']
            after:-z-10

            before:absolute
            before:top-1/2
            before:-translate-y-1/2
            before:-right-20
            before:w-3
            before:h-16
            before:rounded-l
            before:content-['']
            before:z-40
           

            ${
              active === item.path
                ? "after:bg-primary before:bg-accent  before:shadow-[0_-4px_10px_rgba(0,0,0,0.6)]"
                : "after:bg-transparent before:bg-transparent"
            }
          `}
        >
          <Icon
            className={`relative z-20 ${
              active === item.path
                ? "text-text-primary"
                : "text-text-primary"
            }`}
          />
        </li>
      </Link>
    );
  })}
</ul>

        <div className="text-text-primary text-4xl cursor-pointer hover:scale-110 duration-300">
          <HiOutlineLogout />
        </div>
      </aside>

     <aside className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] bg-surface border border-border rounded-full shadow-2xl px-6 py-4 flex justify-between items-center md:hidden z-50">

  <Link to="/home">
    <GrHome className={active === "home" ? "text-primary text-2xl" : "text-text-primary text-2xl"} />
  </Link>

  <Link to="/message">
    <AiOutlineMessage className={active === "message" ? "text-primary text-2xl" : "text-text-primary text-2xl"} />
  </Link>

  <div className="w-14 h-14 rounded-full bg-text-primary flex justify-center items-center shadow-xl -mt-10">
    <img
      src={imag}
      alt=""
      className="w-12 h-12 rounded-full object-cover"
    />
  </div>

  <Link to="/notification">
    <IoMdNotificationsOutline
      className={active === "notification" ? "text-primary text-2xl" : "text-text-primary text-2xl"}
    />
  </Link>

  <Link to="/setting">
    <LuSettings
      className={active === "setting" ? "text-primary text-2xl" : "text-text-primary text-2xl"}
    />
  </Link>

</aside>
    </>
  );
}

export default Sidebar;
