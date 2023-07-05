import React from 'react'
import { ImDownload } from "react-icons/im";
import "./header.css";
import CV from '../../assets/cv.pdf'
import Image from '../../assets/img/me.png'

function Header() {
  return (
    <section className="home" id="home">

      {/* ============== LEFT SIDE : short Introduction about me ==============   */}
      <div className="profile-details">
        <span>
          <h5>Hello I'm</h5>
          <h1>Safa Bouhlel</h1>
          <h5>Fullstack Developer</h5>
        </span>

        <div className="btn-con">
          <a href={CV} className="main-btn" download>
            <span className="btn-text">Download CV</span>
            <span className="btn-icon">
              <ImDownload />
            </span>
          </a>
        </div>
      </div>

      {/* ============== RIGHT SIDE : personal photo ==============   */}
      <div className="profile-picture">
        <img src={Image} alt="" />
      </div>

    </section>
  )
}

export default Header
