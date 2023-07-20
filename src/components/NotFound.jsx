import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>NOT FOUND PAGE</h1>
      <p>Click button and go to home page.</p>
      <NavLink to="/">
        <button>Home page</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
