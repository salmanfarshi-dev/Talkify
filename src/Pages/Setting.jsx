import React from "react";
import { Input } from "@heroui/react";
import { IoSearch } from "react-icons/io5";
import Image from "../assets/salman.jpeg";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { RiEdit2Fill } from "react-icons/ri";
import { RiImageAiFill } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { FaKey } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { VscColorMode } from "react-icons/vsc";




function Setting() {
  return (
    <section>
      <div className="mb-8 mt-5 relative w-full">
        <Input
          aria-label="Search"
          placeholder="Search here..."
          className="w-full  py-3 rounded-full shadow-[0px_0px_10px_rgba(255,255,255,0.1)] pr-10 bg-surface text-white"
        />

        <IoSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 text-xl" />
      </div>

      <div className="flex gap-x-10">
        <div className="bg-surface px-6 py-10 w-[50%] h-[80vh] rounded-[20px] shadow-[2px_5px_10px_rgba(255,255,255,0.2)] ">
          <p className="text-[16px] md:text-xl font-medium text-text-primary ">
            Profile Settings
          </p>

          <div className="mt-10 flex items-center gap-x-4 border-b border-border pb-5">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={Image}
                alt="Profile image"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold text-text-primary font-nunito tracking-[2%]">
                Salman Farshi
              </h3>
              <p className="text-sm font-normal text-text-secondary">
                Stray home stay safe
              </p>
            </div>
          </div>
          <div className="px-7 mt-8 flex flex-col gap-y-8">
            <div className="flex items-center gap-x-6 cursor-pointer">
            <RiEdit2Fill className="text-xl text-text-secondary"/>
            <p className="text-text-secondary text-[16px] font-normal tracking-wider font-sans">Edit Profile Name.</p>

            </div>
            <div className="flex items-center gap-x-6 cursor-pointer">
            <BiSolidMessageRoundedDots  className="text-xl text-text-secondary"/>
            <p className="text-text-secondary text-[16px] font-normal tracking-wider font-sans">Edit Profile Status Info.</p>

            </div>
            <div className="flex items-center gap-x-6 cursor-pointer">
            <RiImageAiFill  className="text-xl text-text-secondary"/>
            <p className="text-text-secondary text-[16px] font-normal tracking-wider font-sans">Edit Profile Photo.</p>

            </div>
            <div className="flex items-center gap-x-6 cursor-pointer">
            <FiHelpCircle  className="text-xl text-text-secondary"/>
            <p className="text-text-secondary text-[16px] font-normal tracking-wider font-sans">Help.</p>

            </div>
          </div>
        </div>

        <div className="bg-surface px-4 py-6 w-[50%] rounded-[20px] h-[80vh] shadow-[2px_5px_10px_rgba(255,255,255,0.2)] ">

           <p className="text-[16px] md:text-xl font-medium text-text-primary ">
            Account Settings
          </p>
          <div className="px-7 mt-8 flex flex-col gap-y-5">
             <div className="flex items-center gap-x-6 cursor-pointer ">
            <FaKey   className="text-xl text-text-secondary"/>
            <p className="text-text-secondary text-[16px] font-normal tracking-wider font-sans">Change Password.</p>

            </div>
             <div className="flex items-center gap-x-6 cursor-pointer">
            <VscColorMode   className="text-xl text-text-secondary"/>
            <p className="text-text-secondary text-[16px] font-normal tracking-wider font-sans">Theme.</p>

            </div>
             <div className="flex items-center gap-x-6 cursor-pointer">
            <RiDeleteBin5Fill   className="text-xl text-text-secondary"/>
            <p className="text-text-secondary text-[16px] font-normal tracking-wider font-sans">Delete Account</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Setting;
