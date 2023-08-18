import React from "react";
import "./landingpage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <header>
        <div className="header">
          <img className="logo" src="" />
          <input type="text" placeholder="Search.." />
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mybooks">My Books</Link>
              </li>
              <li>
                <Link to="/forum">Forums</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
            </ul>
          </nav>
          <button id="contactButton" type="button">
            <Link to="/contactus">Contact Us</Link>
          </button>
          <button id="loginButton" type="button">
            <Link to="/registrationlogin">Login</Link>
          </button>
        </div>
      </header>
      <h1>ReadSwap</h1>
      <h2>Why buy when you can Swap!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
        <br />
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="buttonContainer">
        <button id="bestsellersButton">Bestsellers</button>
        <button id="genresButton">Genres</button>
      </div>
      <div id="bookList" />
      <footer>
        <div id="footer-container"></div>
      </footer>
    </>
  );
}

export default LandingPage;
