import React from "react";

import signin_image from "../images/signin-image.jpg";

import "./auth.css";

const Register = () => {
  return (
    <div className="main">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="fas fa-user"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="fas fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
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
                <div className="form-group">
                  <label htmlFor="rpass">
                    <i class="fas fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="rpass"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                {/* <div className="form-group">
                  <input
                    type="checkbox"
                    value=""
                    name="agree"
                    id="agree-term"
                    className="agree-term"
                    required
                  />
                  <label htmlFor="agree-term" className="label-agree-term">
                    I agree all statements in <a href="#">Terms of service</a>
                  </label>
                </div> */}
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I agree all statements in <a href="#">Terms of service</a>
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    value="Register"
                    name="signup"
                    id="signup"
                    className="form-submit"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signin_image} alt="sigin image" />
              </figure>
              <a href="/admin/register" className="signup-image-link">
                I am already a member
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
