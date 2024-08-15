import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import GoogleIcon from "@mui/icons-material/Google";
import ColorMode from "../../Header/ColorMode";

const MobileHeaderOption = ({ handleClick }) => {
  const { handleLogIn, user, handleLogOut, successfullyToast } =
    useContext(AuthContext);

  const handleGoogle = () => {
    handleLogIn().then((result) => {
      const loggedUser = result?.user;
      successfullyToast("Login Successfully");
    });
  };

  return (
    <div className="bg-green-500 text-white flex flex-col gap-4 px-5 py-5">
      <div className="flex flex-col gap-4 font-bold w-full  ">
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/home"
          onClick={() => handleClick(false)}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/banner"
          onClick={() => handleClick(false)}
        >
          Banner
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/data"
          onClick={() => handleClick(false)}
        >
          Data
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/imagecard"
          onClick={() => handleClick(false)}
        >
          Image Card
        </NavLink>
        {user && (
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
            to="/tech"
            onClick={() => handleClick(false)}
          >
            Tech
          </NavLink>
        )}

        {user && (
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
            to="/page"
            onClick={() => handleClick(false)}
          >
            Page
          </NavLink>
        )}

        {user && (
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
            to="/blog"
            onClick={() => handleClick(false)}
          >
            Blog
          </NavLink>
        )}

        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
          to="/contact"
          onClick={() => handleClick(false)}
        >
          Contact
        </NavLink>
      </div>
      <div className="w-full flex flex-col gap-4 ">
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
  );
};

export default MobileHeaderOption;
