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
import NavItems from "./components/NavItems";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [menu_div, set_menu_div] = useState(false);
  const handle_menu_div = (data) => {
    set_menu_div(data);
  };
  return (
    <>
      <div className="container-fluid">
        <Navbar showmenu={handle_menu_div}></Navbar>
        {menu_div ? (
          <div className="alert carousel-fade navbar">
            <NavItems className="d-inline-block"></NavItems>
          </div>
        ) : (
          ""
        )}
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
