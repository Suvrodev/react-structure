import React from "react";
import "./BatBowl.css";

import bat from "../../../assets/Bat/Bat.png";
const BatBowl = () => {
  return (
    <div className="text-white">
      <h1 className="text-xl font-bold my-4">Bat Bowl Animation</h1>
      <div className="border-2 flex justify-end field">
        <img src={bat} alt="" className="bat" />
      </div>
    </div>
  );
};

export default BatBowl;
