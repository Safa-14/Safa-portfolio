import React, { useState } from "react";
import PortfolioPopUp from "./PortfolioPopUp";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import projects from "../../data";

function ProjectCard({ title, imgUrl, imgUrl_1, description, Technologies_Used, GitHub, role }) {
  const [buttonPopup, setButtonPopUp] = useState(false);

  const OpenPortfolio = (e) => {
    setButtonPopUp(true);
  };

  return (
    <div className="box btn_shadow">
      <div className="project_img">
        <img src={imgUrl} alt="" />
      </div>

      <div className="under_image">
        <h3 className="project_title">{title}</h3>
        <span className="project_button" onClick={OpenPortfolio}>
          Demo <BsFillArrowRightCircleFill />
        </span>
      </div>

      {projects.map((project, index) => {
        return (
          <div key={project.id} >
            <PortfolioPopUp
              trigger={buttonPopup}
              setTrigger={setButtonPopUp}
              title={title}
              description={description}
              imgUrl_1={imgUrl_1}
              technologies_used={Technologies_Used}
              github={GitHub}
              role={role}
            />
          </div>
        );
      })}

    </div>
  )
}

export default ProjectCard;

