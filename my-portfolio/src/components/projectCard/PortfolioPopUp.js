import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import Me from "../../assets/img/work.jpg";

function PortfolioPopUp(props) {

  const title = props.title;
  const description = props.description;
  const imgUrl_1 = props.imgUrl_1;
  const role = props.role;
  const github = props.github;
  const technologiesUsed = props.technologies_used;


  // const [text, setText] = useState('');

  const OpenPortfolio = () => {
    props.setTrigger(false)
    console.log(props);
  }
  // technologiesUsed.forEach((element,i)=> {
  //   console.log(element);
  //   // const text = <div>element</div>

  // });

  // <div>{technologiesUsed.forEach((element, i) => {
  //   // console.log(element);
  //    return element
  // })}</div>

  const arrayDataItems = technologiesUsed.map(technology => 
    // <li key={course.id}>
    //   <p>{course.name}</p>
    //   <span>{course.price}</span>
    // </li>
    <div style={{margin: "5px"}}>{technology}</div>
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
            // className="portfolio_popup-img"
            />
          </div>

          <div className="portfolio_popup-info">
            <div className="portfolio_popup-subtitle">
              <h1 className="details_title">{title}</h1>
            </div>

            <div className="portfolio_popup-body">
              {/* <h3 className="details_title">{title}</h3> */}
              <p className="details_description">
                {description}
              </p>
              <ul className="details_info">
                <li>
                  Technologies :<br />
                  {/* {text} */}
                  
                  <span>{arrayDataItems}</span>
                </li>
                <li>
                  Role : <br/>  <span style={{margin: "5px",display:'block'}}>{role}</span>
                </li>
                {/* <li>
                  Github Link : <a href={github}>{github}</a> 
                </li> */}
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
