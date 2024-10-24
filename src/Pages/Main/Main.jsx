import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Shared/Header/Header";
import MobileHeader from "../Shared/MobileHeader/MobileHeader";
import { AuthContext } from "../Provider/AuthProvider";
import GoToTop from "../GoToTop/GoToTop";
import CrispChat from "../../JSFile/CrispChat";
// import CrispChat from "../../JSFile/CrispChat";

const Main = () => {
  const { color } = useContext(AuthContext);

  const path = useLocation()?.pathname;
  console.log("Path: ", path);
  return (
    <div className="">
      <div className="hidden md:block">{path == "/hdr" || <Header />}</div>
      {/* <div className="hidden md:block">
        <Header />
      </div> */}
      <div className="md:hidden">
        {/* <MobileHeader /> */}
        {path == "/hdr" || <MobileHeader />}
      </div>
      <div
        className={`max-w-7xl mx-auto mt-0 md:mt-0 ${
          color == "light" ? "bg-white" : ""
        }`}
      >
        <Outlet />
      </div>
      <GoToTop />
      <CrispChat />
    </div>
  );
};

export default Main;
