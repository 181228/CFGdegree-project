import React from "react";
import "./landingpage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <header>
        <div className="header">
        <img className="logo" alt="Logo" src={require('../utils/Logo_small.png')} />
          <div className="navButtonContainer">
          <button className="navBut" id="loginButton" type="button">USER</button>
          </div>
          <input className="search-bar" type="text" placeholder="Search.." />
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/mybooks">BOOKS</Link>
              </li>
              <li>
                <Link to="/forum">FORUM</Link>
              </li>
              <li>
                <Link to="/aboutus">ABOUT US</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="pageContent">
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
          <button className="searchBut" id="bestsellersButton">BESTSELLERS</button>
          <button className="searchBut" id="genresButton">GENRES</button>
        </div>
        <div id="bookList" />
      </div>
      <footer>
        <div className="footer-container">
          <button className="footBut" id="contactButton" type="button">CONTACT</button>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
