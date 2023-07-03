import React from "react";
import Nav from "./components/sidenav/Sidenav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
    </>
  );
}

export default App;
