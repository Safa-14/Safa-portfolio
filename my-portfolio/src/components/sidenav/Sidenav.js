import React from 'react';
import "./sidenav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import Toggle from "../toggle/Toggle";

function Sidenav() {

  const [activeNav, setActiveNav] = useState("#");

  /*to change menu class*/
  const [navClick_class, setMenuClass] = useState("navClick_class unclicked");
  const [nav_header, setnavHeader] = useState("navHeader hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //toggle Navbar icon change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("navClick_class clicked");
      setnavHeader("navHeader visible");
    } else {
      setMenuClass("navClick_class unclicked");
      setnavHeader("navHeader hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className='navbar'>

      <div className="nav-icon" onClick={updateMenu}>
        <span className={navClick_class}></span>
        <span className={navClick_class}></span>
        <span className={navClick_class}></span>
      </div>

      <div className={nav_header}>
        <div className="nav-toggle">
          <Toggle />
        </div>

        <nav >
          <a
            href="# "
            onClick={() => setActiveNav("/")}
            className={activeNav === "/" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("/#about")}
            className={activeNav === "/#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#projects"
            onClick={() => setActiveNav("#project")}
            className={activeNav === "#project" ? "active" : ""}
          >
            <BiBook />
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </a>
        </nav>

        <ul>
          <li>
            <a href="www.linkedin.com/in/safa-bouhlel" target="_blank">
              <BsLinkedin />
            </a>
          </li>

          <li>
            <a href="https://github.com/Safa-14">
              <FaGithub />
            </a>
          </li>

          {/* <li>
            <a href="/" target="_blank">
              <FaFacebook />
            </a>
          </li> */}
        </ul>
      </div>

    </div>
  )
}

export default Sidenav
