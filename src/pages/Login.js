import React from "react";

import signin_image from "../images/signin-image.jpg";

import "./auth.css";

const Login = () => {
  return (
    <div className="main">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={signin_image} alt="sigin image" />
              </figure>
              <a href="/admin/register" className="signup-image-link">
                Create an account
              </a>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="fas fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass">
                    <i class="fas fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="pass"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    value="Log in"
                    name="signin"
                    id="signin"
                    className="form-submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
