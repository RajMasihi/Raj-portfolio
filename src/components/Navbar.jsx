import React from "react";
import raj_logo from "../assets/images/raj_logo.png";

const Navbar = () => {
  return (
    <>
      <div className="row header sticky-top">
        <div className="col-lg-12 d-flex justify-content-around">
          <div className="left pt-3">
            {/* <h1>Raj masihi</h1> */}
            <img
              src={raj_logo}
              alt="image not found"
              className=" img-fluid"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-mirror="true"
              style={{ width: "50%" }}
            />
          </div>
          <div className="right d-flex">
            <div
              className="nav navbar accordion-header"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <a href="" className="nav_item">
                Home
              </a>
              <a href="#about_me" className="nav_item">
                About
              </a>
              <a href="#skills" className="nav_item">
                Skills
              </a>
              <a href="#education" className="nav_item">
                Education
              </a>

              <a href="" className="nav_item">
                Projects
              </a>
              <a href="" className="nav_item">
                Experience
              </a>
              <a href="" className="nav_item">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
