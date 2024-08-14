import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ColorMode = () => {
  const { handleSetDarkMode, handleSetLightMode, color } =
    useContext(AuthContext);
  console.log("color: ", color);
  return (
    <div>
      {color == "dark" && (
        <button
          className="w-[30px] border mr-4 rounded-md"
          onClick={handleSetLightMode}
        >
          {" "}
          D{" "}
        </button>
      )}
      {color == "light" && (
        <button
          className="w-[30px] border mr-4 rounded-md"
          onClick={handleSetDarkMode}
        >
          {" "}
          L{" "}
        </button>
      )}
    </div>
  );
};

export default ColorMode;
