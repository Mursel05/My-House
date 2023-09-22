import React, { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "../actions";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const accounts = [
    { name: "Mursal", email: "mursal.haqverdiyev@mail.ru", password: "1234" },
  ];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <form action="/" className="form">
      <div className="input">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />
      </div>{" "}
      <div className="input">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <input id="remember" type="checkbox" />
        <label htmlFor="remember">Remember Me</label>
      </div>
      <button
        className="form-button"
        onClick={(e) => {
          e.preventDefault();
          if (
            accounts.some(
              (account) =>
                account.email === email && account.password === password
            )
          ) {
            accounts.map((account) => localStorage.setItem("account", account.name));
          } else {
            alert("error");
          }
          navigate("/");
        }}
      >
        Sign In
      </button>
    </form>
  );
};

export default Form;
