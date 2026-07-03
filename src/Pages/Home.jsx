import React from "react";
import HomeCard from "../Component/HomeCard";
import { FaUserGroup } from "react-icons/fa6";
import { Input } from "@heroui/react";
import { IoSearch } from "react-icons/io5";
import { ImBlocked } from "react-icons/im";

function Home() {
  return (
    <section className=" mb-32 md:mb-0 px-4 ">
      <div className="mb-8 mt-5 relative w-full md:w-72">
        <Input
          aria-label="Search"
          placeholder="Search here..."
          className="w-full md:w-72 py-3 rounded-full shadow-[0px_0px_10px_rgba(255,255,255,0.1)] pr-10 bg-surface"
        />

        <IoSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 text-xl" />
      </div>

      <div className="mb-8">
        <h1 className="text-xl md:text-2xl font-semibold text-text-primary">
          Welcome back, Salman Farshi 👋
        </h1>

        <p className="text-text-secondary text-sm md:text-base">
          Here's what's happening today
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 ">
        <HomeCard
          icon={<FaUserGroup />}
          iconClass="text-blue-600 bg-blue-100"
          tittle="Friends"
          number="128"
          status="Total Friends"
        />

        <HomeCard
          icon={<FaUserGroup />}
          iconClass="text-[#12B35B] bg-green-100"
          tittle="Groups"
          number="128"
          status="Total Groups"
        />

        <HomeCard
          icon={<FaUserGroup />}
          iconClass="text-orange-400 bg-orange-100"
          tittle="Users"
          number="128"
          status="Total Users"
        />

        <HomeCard
          icon={<FaUserGroup />}
          iconClass="text-blue-600 bg-blue-100"
          tittle="Friend Requests"
          number="128"
          status="New Requests"
        />

        <HomeCard
          icon={<FaUserGroup />}
          iconClass="text-red-400 bg-red-100"
          tittle="My Groups"
          number="128"
          status="Groups You Manage"
        />

        <HomeCard
          icon={<ImBlocked />}
          iconClass="text-red-400 bg-red-100"
          tittle="Blocked Users"
          number="128"
          status="Blocked Users"
        />
      </div>
    </section>
  );
}

export default Home;
