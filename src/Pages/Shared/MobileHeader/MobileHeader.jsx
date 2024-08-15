import React, { useContext, useState } from "react";
import "./MobileHeader.css";

import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import me from "../../../assets/Me/Me.jpg";

import ColorMode from "../Header/ColorMode";
import MobileHeaderOption from "./MobileHeaderOption/MobileHeaderOption";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="absolute w-full z-30 flex justify-between items-center py-2 px-5 bg-[#0F172A]">
        <img src={me} alt="" className=" w-[50px] h-[50px] rounded-full" />
        <div className="">
          <div
            className={`menu-icon ${isOpen ? "open" : ""}`}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        className={`absolute z-20  w-full transition-all duration-700 ${
          isOpen ? "top-[66px]" : "-top-[400px] "
        }`}
      >
        <MobileHeaderOption handleClick={handleClick} />
      </div>
    </div>
  );
};

export default MobileHeader;
