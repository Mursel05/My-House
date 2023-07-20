import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="part-one">
        <NavLink to="/" className="logo">
          <img src="images/logo2.png" alt="icon" />
          <span>MY HOUSE</span>
        </NavLink>
        <div className="links">
          <NavLink to="/About Us" className="link">About Us</NavLink>
          <NavLink to="Contact" className="link">Contact</NavLink>
        </div>
      </div>
      <div className="part-two">
        <span>
          About My House Real Estate Agency We’re the largest property
          portal. Our website has links to about 20,000 Properties for Sale in
          Our sophisticated, yet simple, property search platform makes it
          easy for home hunters to find their ‘happy’.
        </span>
        <div className="app">
          <img src="images/facebook.svg" alt="icon" />
          <img src="images/instagram.svg" alt="icon" />
          <img src="images/twitter.svg" alt="icon" />
          <img src="images/youtube.svg" alt="icon" />
        </div>
      </div>
      <span className="right">Copyright &copy;All Rights Reserved</span>
    </div>
  );
};

export default Footer;
