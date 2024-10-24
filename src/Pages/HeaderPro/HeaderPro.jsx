import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";

const HeaderPro = () => {
  const { text } = useContext(AuthContext);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up"); // To store the scroll direction

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection("up");
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  /**
   * Go Home By Button
   */
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div
        className={`p-5 bg-blue-500 flex justify-center items-center fixed top-0 left-0 w-full transition-transform duration-300 ${
          scrollDirection === "up" ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h1 className="text-white text-xl font-bold">Header-1</h1>
      </div>

      <div
        className={`p-5 bg-green-500 flex justify-center items-center fixed left-0 w-full transition-transform duration-300 ${
          scrollDirection === "down"
            ? "translate-y-0 top-[0px]"
            : "translate-y-0 top-[65px]"
        }`}
      >
        <h1 className="text-white text-xl font-bold">Header-2</h1>
      </div>

      <div className="mt-36">
        <button onClick={handleGoHome} className="btn btn-outline">
          <ArrowBackOutlinedIcon />
        </button>
      </div>

      <div className="my-10 mt-[130px]">{text}</div>
      <div className="my-10 mt-[130px]">{text}</div>
      <div className="my-10 mt-[130px]">{text}</div>
    </div>
  );
};

export default HeaderPro;
