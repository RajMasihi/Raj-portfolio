import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

function Social() {
  return (
    <>
      <a href="https://linkedin.com/in/raj-masihi-92196a21b">
        <FaLinkedin className="social_icon" />
      </a>

      <div className="social_div">
        <a href="https://github.com/RajMasihi">
          <FaGithub className="social_icon" />
        </a>
      </div>
      <div className="social_div">
        <a href="https://www.instagram.com/raj_masihi/">
          <FaInstagram className="social_icon" />
        </a>
      </div>
      <div className="social_div">
        <a href="https://www.facebook.com/raj.masihi.9">
          <FaFacebook className="social_icon" />
        </a>
      </div>
    </>
  );
}

export default Social;
