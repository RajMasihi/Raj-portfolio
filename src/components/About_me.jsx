import React from "react";
import rajimg from "../assets/images/raj3.jpg";

const About_me = () => {
  return (
    <>
      <div className="row about_me" id="about_me">
        <h1 className="section_page">About Me</h1>
        <div className="col-lg-12 d-lg-flex justify-content-between justify-content-sm-center">
          <div
            className="img_div mx-lg-5"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <img src={rajimg} alt="image not found" />
          </div>

          <div className="" data-aos="fade-right" data-aos-duration="1000">
            <h3>Hey There! I'm Raj</h3>
            <p align="justify" className="fs-4 text-lg-start ">
              I am a dedicated and passionate aspiring Full Stack Developer with
              a strong background in building robust and scalable web
              applications using Python, Django, and React. My journey into
              software development began with a fascination for solving
              real-world problems through technology and creating efficient,
              user-friendly applications.
              <br />I specialize in backend development with Django and REST
              APIs, and I build dynamic, responsive frontends using React. I am
              constantly exploring new tools and best practices to write clean,
              maintainable code and deliver impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_me;
