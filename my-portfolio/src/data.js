// I MADE AN ARRAY OF OBJECTS WHERE I PUT ALL THE DATA ABOUT EACH PROJECTS

 const projects = [
  {
    id: 0,
    title: "Smart Home",
    description: "Main goal of this project was to control the house lighting , temperature and detect movement using a Raspberry pi 4. ",
    imgUrl: require("./assets/img/smartHouse.png"),
    imgUrl_1: require("./assets/img/smartHouse.png"),
    role: "Fullstack Project",
    Technologies_Used :['Frontend : CSS, Jquery, Bootstrap and react/redux.',
    'Backend :  nodejs, SQL .','Others: sensors/Arduino and Raspberry pi4.'],
    GitHub :'https://github.com/Safa-14/Smart-Home'
  },
  {
    id: 1,
    title: "Quiz App",
    description: "With this website the teacher can make an exam and send it to his students by a specific Url. After the student finished his exam, his results will be calculated and shown to him.",
    imgUrl: require("./assets/img/quiz.png"),
    imgUrl_1: require("./assets/img/quiz.png"),
    role: "backend project",
    Technologies_Used :['Backend : Node.JS, JavaScript, HTML5, CSS3, MongoDB.'],
    GitHub :'https://github.com/Safa-14/Quiz-App'
  },
  {
    id: 2,
    title: "2D Breakout Game",
    description: "The 2D-BREAKOUT game is a game where you try to destroy all the bricks with a moving ball. When you loose your 3 lives, the game will over and a registration page will appear to you .If you want to save,your score will be added to the 5 high-scores.",
    imgUrl: require("./assets/img/2dgame1.png"),
    imgUrl_1: require("./assets/img/2dgame2.png"),
    role: "frontend",
    Technologies_Used :['Frontend : JavaScript, canvas, HTML5, CSS3.'],
    GitHub :'https://github.com/Safa-14/2D-Breakout-Game'
  },
  {
    id: 3,
    title: "Register Form",
    description: "It is about a simple website which allow users to enter their personal data to register as system users. In this projects we were not allowed to use many technologies.",
    imgUrl: require("./assets/img/registerForm1.png"),
    imgUrl_1: require("./assets/img/registerForm2.png"),
    role: "frontend",
    Technologies_Used :['Frontend : HTML5, CSS3, JavaScript.'],
    GitHub :'https://github.com/Safa-14/Login-Registration-form',
    website : 'https://htmlpreview.github.io/?https://github.com/Safa-14/Login-Registration-form/blob/main/index.html'
  },
  
];


export default projects