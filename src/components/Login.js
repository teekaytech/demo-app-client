/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginImg from '../assets/images/login.jpg';
import Logo from '../assets/images/logo.svg';
import '../assets/stylesheets/login.scss';

const Login = () => {
  const history = useHistory();
  const [info, setInfo] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    userType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, userType } = loginDetails;
    if (userType.length > 0 && username.length > '') {
      history.push({
        pathname: '/dashboard',
        state: { userData: loginDetails },
      });
    } else setInfo(true);
  };

  return (
    <section className="d-flex align-items-center min-vh-100 py-3 py-md-0 main">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src={LoginImg} alt="login" className="login-card-img" />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="brand-wrapper">
                  <img src={Logo} alt="logo" className="logo" />
                </div>
                <p className="login-card-description">Sign into your account</p>
                <p className="text-danger">{ info && 'All fields are compulsory'}</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username" className="sr-only">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      placeholder="Username"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="userType" className="sr-only">
                      User type:
                    </label>
                    <select
                      name="userType"
                      id="userType"
                      className="form-control"
                      onChange={handleChange}
                    >
                      <option value="">select...</option>
                      <option value="admin">Admin</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <button
                    className="btn btn-block login-btn mb-4"
                    type="submit"
                  >
                    Login
                  </button>
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
};

export default Login;
