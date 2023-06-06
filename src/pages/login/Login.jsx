import React, { useState } from "react";
import imgSayit from "../../../img/img-sayit.svg";
import "./login.scss";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={imgSayit} alt="img-login.svg" />
        </div>
        <div className="login__forms">
          <form action=""className="login__register" id="login-in" onSubmit={handleSubmit}>
              <h1 className="login__title">Sign In</h1>
              <div className="login__box">
                <i className="bx bx-user login__icon"></i>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com"/>
              </div>
              <div className="login__box">
                <i className="bx bx-lock login__icon"></i>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********"/>
              </div>
              <a href="#" className="login__forgot">Forgot password?</a>
              <button className="thisbutton" type="submit">
                Sign In
              </button>
              <div>
                <span className="login__account">
                  Don't you have an Account?
                </span>
                <button className="login__signin" onClick={() => props.onFormSwitch("register")}>
                  Sign up
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
