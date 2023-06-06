import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaEnvelope, FaGoogle, FaFacebook } from "react-icons/fa";
import imgSayit from "../../../img/img-sayit.svg";
import "./login.scss";

export const Login = () => {
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
              <h1 className="login__title">Login to Account</h1>
              <div className="login__box">
                <FaEnvelope className="login__icon" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" className="login__input"/>
              </div>
              <div className="login__box">
                <FaLock className="login__icon" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" className="login__input"/>
              </div>
              <a href="#" className="login__forgot">Forgot password?</a>
              <button className="thisbutton" type="submit">
                Sign In
              </button>
              <div>
                <span className="login__account">
                  Don't you have an Account?
                </span>
                <Link to="/register">
                <button className="login__signin">
                  Sign up
                </button>
                </Link>
              </div>
              <div class="login__social">
                <a href="#" class="login__social-icon"
                  ><FaFacebook /></a>
                <a href="#" class="login__social-icon"
                  ><FaGoogle /></a>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
