import React from "react";
import Sidebar from "../Pages/Sidebar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <section className="flex mt-2 mb-2 md:ml-2">
      <div className="hidden md:block md:w-2/12">
        <Sidebar />
      </div>

      <div className="w-full md:w-10/12 px-4 md:pr-10">
        <Outlet />
      </div>

      <div className="md:hidden">
        <Sidebar />
      </div>
    </section>
  );
}

export default RootLayout;
