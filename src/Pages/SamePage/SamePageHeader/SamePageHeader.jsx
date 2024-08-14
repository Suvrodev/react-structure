import React, { useState } from "react";
import "./SamePageHeader.css";

import { Link } from "react-scroll";

const SamePageHeader = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="text-white">
      <div className="w-8/12 bg-green-600 flex items-center justify-center gap-4 font-bold p-4  mx-auto my-4 rounded-lg sticky top-1">
        <Link to="text1" smooth={true} activeClass="active">
          Text-1
        </Link>
        <Link to="text2" smooth={true} duration={500} activeClass="active">
          Text-2
        </Link>
        <Link to="text3" smooth={true} duration={500}>
          Text-3
        </Link>
        <Link to="text4" smooth={true} duration={500}>
          Text-4
        </Link>
        <Link to="text5" smooth={true} duration={500}>
          Text-5
        </Link>

        {/* New */}
        {/* <div className="header">
          <nav className="navbar">
            <div className="hamburger" onClick={handleClick}>
              {click ? <p>A</p> : <p>B</p>}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="text1" onClick={closeMenu}>
                  Text-1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="text2" onClick={closeMenu}>
                  Text-2
                </Link>
              </li>
              <li className="nav-item">
                <Link to="text3" onClick={closeMenu}>
                  Text-3
                </Link>
              </li>
              <li className="nav-item">
                <Link to="text4" onClick={closeMenu}>
                  Text-4
                </Link>
              </li>
            </ul>
          </nav>
        </div> */}
      </div>
    </div>
  );
};

export default SamePageHeader;
