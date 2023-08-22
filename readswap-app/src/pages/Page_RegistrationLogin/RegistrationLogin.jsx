import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./registrationlogin.css";
import Header from '../Header';
import Footer from '../Footer';



function RegistrationLogin() {
  return (
    <div>
      {/* Alert Box - Displays box with "Please fill out required fields" if no details entered in to forms */}
      <div className="alert-box">
        <p className="alert" />
      </div>
      <form action="">
        <fieldset>
          <h1 className="heading">login</h1>
          <input
            type="email"
            placeholder="email"
            autoComplete="off"
            className="email"
            required=""
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            className="password"
            required=""
          />
          <button>Login</button>
          <a href="" className="link">
            Don't have an account? Register now
          </a>
        </fieldset>
      </form>
      <div className="alert-box">
        <p className="alert" />
      </div>
      <form action="">
        <fieldset>
          <h1 className="heading">Register</h1>
          <input
            type="text"
            placeholder="name"
            autoComplete="off"
            className="name"
            required=""
          />
          <input
            type="email"
            placeholder="email"
            autoComplete="off"
            className="email"
            required=""
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            className="password"
            required=""
          />
          <button className="submit-btn">register</button>
          <a href="" className="link">
            already have an account ? log in here
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default RegistrationLogin;