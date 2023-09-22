import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const logIn = useSelector((state) => state);
  return (
    <div className="header">
      <div className="language-mode">
        <div className="languages">
          <NavLink className="language">az</NavLink>
          <NavLink className="language">en</NavLink>
        </div>
        <img src="/images/light-mode.png" alt="icon" className="light-mode" />
      </div>
      <div className="account">
        {console.log(localStorage.getItem("account"))}

        {localStorage.getItem("account") != undefined ? (
          <NavLink className="link" to="/Wishlist">
            Wishlist
          </NavLink>
        ) : (
          ""
        )}
        {localStorage.getItem("account") != undefined ? (
          <NavLink className="link" to="/Cart">
            Cart
          </NavLink>
        ) : (
          ""
        )}
        <NavLink className="link" to="/Sign In">
          <div className="profil">
            <img src="/images/account.png" alt="icon" />
            <span>
              {localStorage.getItem("account") != undefined
                ? localStorage.getItem("account")
                : "Sign In"}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
{
}
export default Header;
