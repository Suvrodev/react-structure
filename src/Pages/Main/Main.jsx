import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import MobileHeader from "../Shared/MobileHeader/MobileHeader";
import GoToTop from "../GoToTop/GoToTop";
import { AuthContext } from "../Provider/AuthProvider";

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
    </div>
  );
};

export default Main;
