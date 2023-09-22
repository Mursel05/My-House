import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="part-one">
        <NavLink to="/" className="logo">
          <img src="/images/logo2.png" alt="icon" />
          <span>MY HOUSE</span>
        </NavLink>
        <div className="links">
          <NavLink to="/About Us" className="link">
            About Us
          </NavLink>
          <NavLink to="Contact" className="link">
            Contact
          </NavLink>
        </div>
      </div>
      <div className="part-two">
        <span>
          Thank you for considering My House for your dream home. We
          invite you to explore our website and discover the unique features and
          designs we have to offer. If you have any questions or would like to
          schedule a visit to our model homes, our team is here to assist you.
          Let us be your partner in finding the perfect place to call home.
        </span>
        <div className="app">
          <img src="/images/facebook.svg" alt="icon" />
          <img src="/images/instagram.svg" alt="icon" />
          <img src="/images/twitter.svg" alt="icon" />
          <img src="/images/youtube.svg" alt="icon" />
        </div>
      </div>
      <span className="right">Copyright &copy;All Rights Reserved</span>
    </div>
  );
};

export default Footer;
