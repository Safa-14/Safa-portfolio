import React, { useState } from "react";
import PortfolioPopUp from "./PortfolioPopUp";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import projects from "../../data";

function ProjectCard({ title, imgUrl, imgUrl_1,description, Technologies_Used, GitHub, role }) {
  const [buttonPopup, setButtonPopUp] = useState(false);

  const OpenPortfolio = (e) => {
    setButtonPopUp(true);
    // console.log(e);
    // console.log(<PortfolioPopUp/>);
  };
  return (
    <div className="box btn_shadow">
      <div className="project_img">
        <img src={imgUrl} alt="" />
      </div>

      <div className="under_image">
        <h3 className="project_title">{title}</h3>
        <span className="project_button" onClick={OpenPortfolio}>
          Demo <BsFillArrowRightCircleFill/>
        </span>
      </div>

      {projects.map((project, index) => {
        // if (project.id === index) {
        //   // console.log(project.title ,index)

        // }
        //  console.log(projects[index].title);
        // console.log(project.Technologies_Used)
        // project.Technologies_Used.forEach((technologie) => {
        //   console.log(technologie);
        // })
        return (
          <div key={project.id} >
            {/* {project.id === index ?              console.log(<PortfolioPopUp description={project.description}/>)
 : ""} */}
            <PortfolioPopUp

              trigger={buttonPopup}
              setTrigger={setButtonPopUp}
              title={title}
              description={description}
              imgUrl_1={imgUrl_1}
              technologies_used={Technologies_Used}
              github={GitHub}
              role={role}
            // title={project.id === index ? projects[index].title : ""}
            // description={project.description}
            />
            {/* {console.log({project})} */}
          </div>
        );
      })}
      {/* */}
      {/*  */}
    </div>
  )
}

export default ProjectCard;

/* <div className="portfolio_item-details">
        <h3 className="details_title">{title}</h3>
        <p className="details_description">{description}</p>
        <ul className="details_info">
          <li>
            Created<span></span>
          </li>
          <li>
            Tachnologies<span>etet</span>
          </li>
          <li>
            Role<span>{role}</span>
          </li>
          <li>
            View<span>tete</span>
          </li>
        </ul>
      </div> */
