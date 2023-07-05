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

        {/* TOGGLE BUTTON : change the darkmode of the website */}
        <div className="nav-toggle">
          <Toggle />
        </div>

        {/* MIDDLE PART : differents links to each part of the project */}
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

        {/* SOCIAL MEDIA PART : linkedin and github links */}
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/safa-bouhlel/">
              <BsLinkedin />
            </a>
          </li>

          <li>
            <a href="https://github.com/Safa-14">
              <FaGithub />
            </a>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default Sidenav
