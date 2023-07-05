import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";


function PortfolioPopUp(props) {

  const title = props.title;
  const description = props.description;
  const imgUrl_1 = props.imgUrl_1;
  const role = props.role;
  const github = props.github;
  const technologiesUsed = props.technologies_used;


  const OpenPortfolio = () => {
    props.setTrigger(false)
    console.log(props);
  }

  const arrayDataItems = technologiesUsed.map(technology =>
    <div style={{ margin: "5px" }}>{technology}</div>
  )

  return (props.trigger) ? (
    <div className="portfolio_popup">
      <div className="portfolio_popup-inner">
        <div className="portfolio_popup-content">
          <span className="portfolio_popup-close" onClick={OpenPortfolio}><AiOutlineCloseCircle /></span>
          <div className="portfolio_popup-img" >
            <img
              src={imgUrl_1}
              alt="alt"
              width="500px"
              height="500px"
            />
          </div>

          <div className="portfolio_popup-info">
            <div className="portfolio_popup-subtitle">
              <h1 className="details_title">{title}</h1>
            </div>

            <div className="portfolio_popup-body">
              <p className="details_description">
                {description}
              </p>
              <ul className="details_info">
                <li>
                  Technologies :<br />
                  <span>{arrayDataItems}</span>
                </li>
                <li>
                  Role : <br />  <span style={{ margin: "5px", display: 'block' }}>{role}</span>
                </li>
                <div className="buttonClickGithub">
                  <a href={github} className='githubBtn' >
                    Github Link
                  </a>
                </div>


              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  ) : "";
}

export default PortfolioPopUp;
