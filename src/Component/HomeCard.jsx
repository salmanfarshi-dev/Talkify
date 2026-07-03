import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

function HomeCard({ icon, tittle, number, status, iconClass }) {
  return (
    <div className="bg-surface border border-border w-full md:w-100 py-3 md:py-6 px-3 md:px-6 shadow-[0px_0px_10px_rgba(0,0,0,0.2)] rounded-2xl md:rounded-3xl">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-3 md:gap-x-6 items-center">
          <div
            className={`bg-[#E0DBFA] flex justify-center items-center rounded-2xl   md:w-12  md:h-12 ${iconClass}`}
          >
            {icon}
          </div>

          <h2 className="md:text-[18px] text-sm text-text-primary font-semibold">
            {tittle}
          </h2>
        </div>

        <BsThreeDotsVertical className="cursor-pointer" />
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mt-4 md:mb-2">
        {number}
      </h2>
      <p className="text-sm md:text-[16px] font-normal text-text-secondary">
        {status}
      </p>

      <div className="flex items-center gap-2 mt-5 md:mt-8 text-accent/70 hover:text-accent  duration-300">
        <a
          href=""
          className=" text-sm md:text-[16px]  font-medium leading-none"
        >
          View All
        </a>

        <FaArrowRight className="shrink-0" />
      </div>
    </div>
  );
}

export default HomeCard;
