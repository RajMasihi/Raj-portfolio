import React from "react";
import { IoSchoolSharp } from "react-icons/io5";

function Education({ q, specialize, board, year }) {
  return (
    <>
      <div className="row" id="education">
        <h1 className="section_page">Education</h1>
        <div className="col-lg-12">
          <div
            className="d-flex alert alert-success"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="px-4">
              <IoSchoolSharp className="edu_icon"></IoSchoolSharp>
            </div>

            <div className="edu_info px-4">
              <h2 className="">B.Tech</h2>
              <hr />
              <h4>Computer Science and Engineering</h4>
              <h6>SHUATS University, Prayagraj UP</h6>
              <p>2021-2024</p>
            </div>
          </div>

          <div
            className="d-flex alert alert-success"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="px-4">
              <IoSchoolSharp className="edu_icon"></IoSchoolSharp>
            </div>
            <hr />

            <div className="edu_info px-4">
              <h2>Diploma</h2>
              <hr />
              <h4>Computer Science and Engineering</h4>
              <h6>Board of Technical Education,UP</h6>
              <p>2018-2021</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
