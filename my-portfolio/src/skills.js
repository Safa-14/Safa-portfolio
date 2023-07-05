/*TECHNOLOGIES */
import html from './assets/img/html.png';
import css from './assets/img/css.png';
import js from './assets/img/js.png';
import bootstrap from './assets/img/bootstrap.png';
import nodejs from './assets/img/nodeJS.png';

/*JAVASCRIPTS FRAMEWORKS*/
import react from './assets/img/react.png';
import redux from './assets/img/redux.png';
import jquery from './assets/img/jquery.png';

/* DATABASES*/
import mongodb from './assets/img/mongodb.png';
import mysql from './assets/img/mysql.png';

/*VERSIONS CONTROL*/
import git from './assets/img/git.png';
import github from './assets/img/gitHub.png';

/*OTHERS SKILLS*/
import c from './assets/img/c.png';
import vhdl from './assets/img/vhdl.png';
import matlab from './assets/img/matlab.png';
import labview from './assets/img/labview.png';
import arduino from './assets/img/arduino.png';



const skills = [
    {
      id: '0',
      title: "Technologies",
      technolgiesUsed: [
                        <img src={html} alt="html" className='skill'/>,
                        <img src={css} alt="css" className='skill'/>,
                        <img src={js} alt="js" className='skill'/>,
                        <img src={bootstrap} alt="bootstrap" className='skill'/>,
                        <img src={nodejs} alt="nodejs" className='skill'/>
                      ],
      zIndex: '5'
    },
    {
      id: '1',
      title: "Javascipts Frameworks",
      technolgiesUsed: [
                        <img src={react} alt="react" className='skill'/>,
                        <img src={redux} alt="redux" className='skill'/>,
                        <img src={jquery} alt="jquery" className='skill'/>
                      ],
      zIndex: '4'
    },
    {
      id: '2',
      title: "Databases",
      technolgiesUsed: [
                        <img src={mongodb} alt="mongodb" className='skill'/>,
                        <img src={mysql} alt="mysql" className='skill'/>
                      ],
      zIndex: '3'
    },
    {
      id: '3',
      title: "Versions Control",
      technolgiesUsed: [
                        <img src={git} alt="git" className='skill'/>,
                        <img src={github} alt="github" className='skill'/>
                      ],
      zIndex: '2'
    },
    {
      id: '4',
      title: "Others Skills",
      technolgiesUsed:[ 
                        <img src={c} alt="c" className='skill'/>,
                        <img src={vhdl} alt="vhdl" className='skill' />,
                        <img src={matlab} alt="matlab"  className='skill'/>,
                        <img src={labview} alt="labview"  className='skill'/>,
                        <img src={arduino} alt="arduino"  className='skill'/>
                      ],
      zIndex: '1'
    },
    
  ];
  
  
  export default skills





















// {
//     "students": [
//       {
//         "name": "Student 1",
//         "age": "22",
//         "department": "Information Technology",
//         "rollno": "123"
//       },
//       {
//         "name": "Student 2",
//         "age": "21",
//         "department": "Computer Engineering",
//         "rollno": "456"
//       },
//       {
//         "name": "Student 3",
//         "age": "23",
//         "department": "Information Technology",
//         "rollno": "789"
//       }
//     ]
//   }