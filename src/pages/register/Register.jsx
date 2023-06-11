import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import imgSayit from "../../../img/img-sayit.svg";
import "./register.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(username, email);
  }; 
  return (
    <div className="register">
      <div className="register__content">
        <div className="register__img">
          <img src={imgSayit} alt="img-register.svg" className="img_register"/>
        </div>
        <div className="register__forms">
          <form action="" className="register__register" id="register-in" onSubmit={handleSubmit}>
            
            <h1 className="register__title">Create Account</h1>
            <div class="register__box">
            <FaUser className="login__icon" />
              <input value={username} onChange={(e) => 
              setUsername(e.target.value)} type="text" placeholder="Username" class="register__input" />
            </div>
            <div className="register__box">
            <FaEnvelope className="login__icon" />
              <input
                className="register__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="youremail@example.com"
              />
            </div>
            <div class="register__box">
            <MdEvent className="login__icon" />
            <input className="register__input" value = {birthday} onChange={(e) => setBirthday(e.target.value)} type="date" placeholder="Date of birth" />
            </div>
            <div className="register__box">
            <FaLock className="login__icon" />
              <input
              className="register__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
              />
            </div>
            <button className="thisbutton" type="submit">
              Sign Up
            </button>
            <div>
              <span className="register__account">
                Do you have an Account?
              </span>
              <Link to="/login">
              <button className="register__signin">
                Sign in
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;