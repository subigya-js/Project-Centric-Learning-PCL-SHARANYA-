import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const btnClick = () => {
    navigate("/dashboard");
    console.log("Button Clicked");
  };

  return (
    <>
      <div className="main-landing">
        <div className="login-container">
          <h1>SHARANYA</h1>

          <div className="form-container">
            <div className="form">
              <div className="username">
                <label>Username</label>
                <br />
                <input className="username-input" type="text" />
              </div>

              <div className="password">
                <label>Password</label>
                <br />
                <input className="password-input" type="password" />
              </div>
            </div>

            <button onClick={btnClick} className="login-btn" href="/summary">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
