import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import MobileHeader from "../Shared/MobileHeader/MobileHeader";
import GoToTop from "../GoToTop/GoToTop";

const Main = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      <GoToTop />
    </div>
  );
};

export default Main;
