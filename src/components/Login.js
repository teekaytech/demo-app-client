/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import LoginImg from '../assets/images/login.jpg';
import Logo from '../assets/images/logo.svg';
import '../assets/stylesheets/login.scss';

const Login = () => (
  <section className="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div className="container">
      <div className="card login-card">
        <div className="row no-gutters">
          <div className="col-md-5">
            <img
              src={LoginImg}
              alt="login"
              className="login-card-img"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="brand-wrapper">
                <img
                  src={Logo}
                  alt="logo"
                  className="logo"
                />
              </div>
              <p className="login-card-description">Sign into your account</p>
              <form>
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="***********"
                    suggested="password"
                  />
                </div>
                <input
                  name="login"
                  id="login"
                  className="btn btn-block login-btn mb-4"
                  type="button"
                  value="Login"
                />
              </form>
              <a href="#!" className="forgot-password-link">
                Forgot password?
              </a>
              <p className="login-card-footer-text">
                {"Don't have an account? "}
                <a href="#!" className="text-reset">
                  Register here
                </a>
              </p>
              <nav className="login-card-footer-nav">
                <a href="#!">Terms of use.</a>
                <a href="#!">Privacy policy</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Login;
