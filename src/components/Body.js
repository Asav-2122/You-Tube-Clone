import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";

const Body = () => {
  return (
    <div className="flex flex-col">
       {/* <Sidebar /> */}
      <Navbar/>
      <div className="flex">
      <Sidebar />
      <Outlet />
      </div>
    </div>
  );
};

export default Body;
