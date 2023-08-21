import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import { ShoppingCart } from "@phosphor-icons/react";


function Header() {
    return (
        <header>
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
            <div className="header">
            <img className="logo" alt="Logo" src={require('./utils/Logo_small.png')} />
            <div className="headText">
                <h1 >ReadSwap</h1>
                <h2>Why buy when you can Swap!</h2>
            </div>
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
                        <Link to="/bookslisting">BOOKS</Link>
                    </li>
                    <li>
                        <Link to="/forum">FORUM</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">ABOUT US</Link>
                    </li>
                </ul>
            </nav>
=======
>>>>>>> Stashed changes
            <div className="header-container">
                <div className="header-inner">
                    <img className="logo" alt="Logo" src={require('./utils/Logo_small.png')} />
                    <div className="headText">
                        <h1 >ReadSwap</h1>
                        <h2>Why buy when you can Swap!</h2>
                    </div>
<<<<<<< Updated upstream
                    <div className="navButtonContainer">
                    <button className="navBut" id="loginButton" type="button">USER</button>
=======
                    <div className="navButtonsContainer">
                        <Link to="/cart" className="navCart"><ShoppingCart size = {42}/></Link>
                        <button className="navBut" id="loginButton" type="button">USER</button>
>>>>>>> Stashed changes
                    </div>
                    <input className="search-bar" type="text" placeholder="Search.." />
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/bookslisting">BOOKS</Link>
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
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
            </div>
        </header>
    );
}

export default Header;
