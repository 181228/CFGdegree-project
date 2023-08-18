import React from "react";
import "./landingpage.css";
// import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';

function LandingPage() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}

export default LandingPage;
