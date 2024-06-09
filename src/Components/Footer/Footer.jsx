import React from "react";
import "./Footer.css";
import GetHub from "../Images/github.png";
import LinkLedin from "../Images/linkedin.png";
import Instegram from "../Images/instagram.png";
import Logo from "../Images/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
    
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={GetHub} alt="" />
          <img src={Instegram} alt="" />
          <img src={LinkLedin} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur footer-blur-f1"></div>
      <div className="blur footer-blur-f2"></div>
    </div>
  );
};

export default Footer;
