import React from 'react'
import { ImDownload } from "react-icons/im";
import { RiContactsLine } from "react-icons/ri";
import "./header.css";
import CV from '../../assets/cv.pdf'
// import Image from '../../assets/img/me.png'

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
        <div style={{'padding-bottom': '40px'}}>
          <h2 className='text-zone'>Front End Developer / Backend End Developer / React Developer</h2>
        </div>

        <div className="btn-con">
          <a href={CV} className="main-btn" download>
            <span className="btn-text">Download CV</span>
                                      
            <span className="btn-icon">
              <ImDownload />
            </span>
          </a>
          <a href='#contact' className="main-btn" >
            <span className="btn-text"> Contact me &nbsp; &nbsp;</span>
            <span className="btn-icon">
              <RiContactsLine />
            </span>
          </a>
        </div>
      </div>

    </section>
  )
}

export default Header
