import React from "react";
import "./MoonNight.css";

import prince from "../../../assets/moonNight/Prince_.png";
import fairy from "../../../assets/moonNight/Fairy_.png";

const MoonNight = () => {
  return (
    <div className="sky">
      <img className="fairy" src={fairy} alt="" />
      <img class="prince" src={prince} alt="" />
    </div>
  );
};

export default MoonNight;
