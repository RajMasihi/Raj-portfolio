import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About_me from "./components/About_me";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Navbar></Navbar>

        <Home></Home>
        <About_me></About_me>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
