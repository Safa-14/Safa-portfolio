import React from "react";
import Nav from "./components/sidenav/Sidenav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import './App.css';
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import { useContext } from "react";
import { themeContext } from "./Context";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
console.log(darkMode);
  return (
    <div 
    id={ darkMode ? "dark" : "light"}
  >
    
      <Nav />
      <Header />
      <About />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
