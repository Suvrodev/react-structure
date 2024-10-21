import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import me from "../../../assets/Me/Me.jpg";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthContext } from "../../Provider/AuthProvider";
import ColorMode from "./ColorMode";

const Header = () => {
  const { handleLogIn, user, handleLogOut, successfullyToast } =
    useContext(AuthContext);

  const handleGoogle = () => {
    handleLogIn().then((result) => {
      const loggedUser = result?.user;
      successfullyToast("Login Successfully");
    });
  };
  return (
    <div>
      <div className="p-2  text-white  bg-[#0F172A] flex justify-between items-center px-10">
        <div className=" w-[25%]">
          <img src={me} alt="" className="w-[75px] h-[75px] rounded-full" />
        </div>
        <div className="flex justify-center  gap-4 font-bold w-[50%] ">
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
            to="/banner"
          >
            Banner
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
            to="/data"
          >
            Data
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
            to="/imagecard"
          >
            Image Card
          </NavLink>
          {user && (
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
              to="/tech"
            >
              Tech
            </NavLink>
          )}

          {user && (
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
              to="/page"
            >
              Page
            </NavLink>
          )}

          {user && (
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
              to="/blog"
            >
              Blog
            </NavLink>
          )}

          {user && (
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
              to="/modal"
            >
              Modal
            </NavLink>
          )}

          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        <div className="w-[25%]  flex justify-end items-center">
          <ColorMode />
          {user ? (
            <div className="flex items-center gap-4">
              <h1>{user?.displayName}</h1>
              <img
                src={user?.photoURL}
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <button
                className="btn btn-primary text-white"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button
                className=" btn btn-success bg-yellow-500 text-white "
                onClick={() => handleGoogle()}
              >
                <GoogleIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
