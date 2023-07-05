import React from 'react';
import "./about.css";
import skills from "../../skills";

function About() {
  return (
    <section className='about' id='about'>
      <h5 style={{'color': 'rgb(37, 25, 31)'}}>Get To Know</h5>
      <h2 style={{'color': 'rgb(37, 25, 31)'}}>About Me</h2>

      <div className="about_container">
        <div className="about__content">
          <p>
            I am a junior full stack developer.
          </p>
          <p>
            I graduated as Electrical engineer and then changed my path to web development career.
          </p>
          <p>
            I enjoy programming and making websites.
          </p>
        </div>

        <div className="right_side">
          <ul className="main_skills">
            {skills.map((skill, index) => (

              <li
                key={skill.id}
                style={{
                  zIndex: skill.zIndex
                }}>
                <span className='skillsName'>{skill.title}</span>
                <div className="bar_container">
                  {(skill.technolgiesUsed.map((tech, index) =>
                  (<div className="bar" key={index} >
                    <div>{tech}</div>
                  </div>)
                  ))}
                </div>
                <span className="hoverIcon">
                  <p>hover</p>
                  <p>me</p>
                </span>
              </li>

            ))}

          </ul>
        </div>
      </div>

    </section>
  )
}

export default About
