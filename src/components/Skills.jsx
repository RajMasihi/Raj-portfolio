import React from "react";
import {
  FaHtml5,
  FaPython,
  FaBootstrap,
  FaReact,
  FaCss3Alt,
  FaPhp,
} from "react-icons/fa";
import { SiDjango, SiJquery } from "react-icons/si";
import { TbBrandJavascript, TbSql, TbBrandMysql } from "react-icons/tb";
import Skill_Icons from "./Skill_Icons";

const Skills = () => {
  const icons = {
    FaPython: "Python",
    SiDjango: "Django",
    TbBrandJavascript: "Javascript",
    SiJquery: "jQuery",
    FaReact: "React.js",
    TbSql: "SQL",
    TbBrandMysql: "My Sql",
    FaHtml5: "HTML",
    FaCss3Alt: "CSS",
    FaBootstrap: "Bootstrap",
    FaPhp: "PHP",
  };
  return (
    <>
      <div className="row" id="skills">
        <h1 className="section_page">Skills</h1>
        <div className="col-md-12">
          <div
            className="p-2 d-lg-flex flex-wrap justify-content-center"
            //data-aos="fade-up"
            //data-aos-duration="1500"
          >
            {Object.entries(icons).map(([key, name]) => (
              <div
                className="skill m-2 border-1 alert alert-primary d-grid"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-mirror="true"
              >
                <Skill_Icons icon={key}></Skill_Icons>
                <hr /> <h2>{name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
