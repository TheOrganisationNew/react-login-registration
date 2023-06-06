import React, {useState} from "react";
import imgSayit from "../../../img/img-sayit.svg";
import "./register.scss";

export const Register = (props) => {
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
          <img src={imgSayit} alt="img-register.svg" />
        </div>
        <div className="register__forms">
          <form action="" className="register__register" id="register-in" onSubmit={handleSubmit}>
            
            <h1 className="register__title">Create Account</h1>
            <div class="register__box">
              <i class="bx bx-user register__icon"></i>
              <input value={username} onChange={(e) => 
              setUsername(e.target.value)} type="text" placeholder="Username" class="register__input" />
            </div>
            <div className="register__box">
              <i className="bx bx-user register__icon"></i>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="youremail@example.com"
              />
            </div>
            <div class="register__box">
            <input  value = {birthday} onChange={(e) => setBirthday(e.target.value)} type="date" placeholder="Date of birth" />
            </div>
            <div className="register__box">
              <i className="bx bx-lock register__icon"></i>
              <input
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
              <span className="login__account">
                Do you have an Account?
              </span>
              <button
                className="login__signin"
                onClick={() => props.onFormSwitch("login")}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;