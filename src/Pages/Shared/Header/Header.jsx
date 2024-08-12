import React from "react";
import { NavLink } from "react-router-dom";
import me from "../../../assets/Me/Me.jpg";

const Header = () => {
  return (
    <div>
      <div className="p-2  text-white  bg-[#0F172A] flex justify-between items-center px-10">
        <div>
          <img src={me} alt="" className="w-[75px] h-[75px] rounded-full" />
        </div>
        <div className="flex  gap-4 font-bold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
            to="/banner"
          >
            Banner
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
            to="/data"
          >
            Data
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
            to="/imagecard"
          >
            Image Card
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        <div>
          <button className=" btn btn-success text-white">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
