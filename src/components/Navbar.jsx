import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import raj_logo from "../assets/images/raj_logo.png";
import NavItems from "./NavItems";

const Navbar = ({ showmenu }) => {
  const [menu, setmenu] = useState(false);
  const handle_menu = () => {
    setmenu(!menu);
    showmenu(!menu);
  };

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
          <div className="right">
            <div
              className="nav navbar accordion-header"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <button onClick={handle_menu} className="logo_menu">
                {!menu ? (
                  <TiThMenuOutline className="text-lg-end"></TiThMenuOutline>
                ) : (
                  <IoMdClose className="text-lg-end"></IoMdClose>
                )}
              </button>
              <NavItems></NavItems>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
