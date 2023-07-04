import React from "react";
import Nav from "./components/sidenav/Sidenav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import './App.css';
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Projects/>
      <Contact />
    </>
  );
}

export default App;
