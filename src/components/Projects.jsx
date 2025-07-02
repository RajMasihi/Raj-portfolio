import React from "react";

const Projects = () => {
  return (
    <>
      <div className="row">
        <h1 className="section_page">Projects</h1>
        <div className="col-lg-12 d-flex flex-wrap justify-content-around">
          <div
            className="alert alert-info project_div"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h2 className="text-center">Innobyte Ecomm</h2>
            <hr />
            <p>
              This is an E-commerce web aplication where i build APIs for
              ecommerce web aplication.In this project user login with JWT
              authentication and use can add to cart product, check stock and
              buy products etc.
            </p>
            <p>#python #Django #DRF #MySql</p>
            <a
              href="https://github.com/RajMasihi/InnoByte_Ecommerce_intern.git"
              style={{ color: "blue" }}
            >
              Github link
            </a>
          </div>
          <div
            className=" alert alert-info project_div"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h2 className="text-center">My Academy</h2>
            <hr />
            <p>
              This is an learning web aplication where every user register with
              email verification and select theirself as a student or teacher or
              learning organization owner.
            </p>
            <p>#python #Django #SqLite</p>
            <a href="" style={{ color: "blue" }}>
              Github link
            </a>
          </div>
          <div
            className=" alert alert-info project_div"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h2 className="text-center">MMIT</h2>
            <hr />
            <p>
              This is an college management website where college manages
              student data , faculties data, time table, attendance etc.
            </p>
            <p>#PHP #javascript #jQuery #AJAX #Bootstrap #MySql</p>
            <a href="" style={{ color: "blue" }}>
              Github link
            </a>
          </div>
          <div
            className=" alert alert-info project_div"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h2 className="text-center">Blogging web application</h2>
            <hr />
            <p>
              This is a blogging web application where users can read blogs,
              like and comment using their Facebook login, and share posts
              directly on Facebook.
            </p>
            <p>#Python #Django #SqLite #third party api</p>
            <a href="" style={{ color: "blue" }}>
              Github link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
