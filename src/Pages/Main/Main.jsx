import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import MobileHeader from "../Shared/MobileHeader/MobileHeader";
import { AuthContext } from "../Provider/AuthProvider";
import GoToTop from "../GoToTop/GoToTop";
import CrispChat from "../../JSFile/CrispChat";
// import CrispChat from "../../JSFile/CrispChat";

const Main = () => {
  const { color } = useContext(AuthContext);
  return (
    <div>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <div
        className={`max-w-7xl mx-auto ${color == "light" ? "bg-white" : ""}`}
      >
        <Outlet />
      </div>
      <GoToTop />
      <CrispChat />
    </div>
  );
};

export default Main;
