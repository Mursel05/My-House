import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        <img src="images/logo2.png" alt="icon" />
        <span>MY HOUSE</span>
      </NavLink>
      <div className="links">
        <NavLink to="/Old Houses" className="link">Old Houses</NavLink>
        <NavLink to="/New Houses" className="link">New Houses</NavLink>
        <NavLink to="/About Us" className="link">About Us</NavLink>
        <NavLink to="/Contact" className="link">Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
