import React from "react";
import "./BatBowl.css";

import bat from "../../../assets/Bat/Bat.png";
const BatBowl = () => {
  return (
    <div className="text-white">
      <div>
        <h1 className="text-xl font-bold my-4">Bat Bowl Animation-1</h1>
        <div className=" bg-[#008000] field">
          <img src={bat} alt="" className="bat " />
          <div className="bowl"></div>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold my-4">Bat Bowl Animation-2</h1>
        <div className=" bg-[#008000] field flex items-center relative">
          <img src={bat} alt="" className="bat_2 " />
          <div className="bowl_2"></div>
        </div>
      </div>

      {/* <div>
        <h1 className="text-xl font-bold my-4">Bat Bowl Animation-3</h1>
        <div className=" bg-[#008000] field flex items-center justify-end relative">
          <img src={bat} alt="" className="bat_3 " />
          <div className="bowl_3"></div>
        </div>
      </div> */}

      <div>
        <h1 className="text-xl font-bold my-4">Bat Bowl Animation-4</h1>
        <div className=" bg-[#008000] field flex items-center  relative">
          <img src={bat} alt="" className="bat_4 " />
          <div className="bowl_4"></div>
        </div>
      </div>

      <div className="my-20 flex flex-col md:flex-row items-center gap-10">
        <div className="Stag1">
          <div className="Stag1Bowl"></div>
        </div>
        <div className="Stag2">
          <div className="Stag2Bowl"></div>
        </div>
      </div>

      <div className="my-20 ">
        <h1 className="text-xl font-bold my-4">Progress</h1>
        <div className="mx-20 mt-[200px] flex flex-col md:flex-row justify-around gap-20 md:gap-0 items-center">
          <div className="Round">
            <div className="top"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="left"></div>
          </div>

          <div className="heloProgress"></div>
        </div>
      </div>
    </div>
  );
};

export default BatBowl;
