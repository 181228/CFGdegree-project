import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import { ShoppingCart } from "@phosphor-icons/react";

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="header-inner">
                    <img className="logo" alt="Logo" src={require('../../utils/Logo_small.png')} />
                    <div className="headText">
                        <h1>ReadSwap</h1>
                        <h2>Why buy when you can Swap!</h2>
                    </div>
                    <div className="navButtonsContainer">
                        <Link to="/cart" className="navCart"><ShoppingCart size={42} /></Link>
                        <Link to="/registrationlogin"><button className="navBut" id="otherLoginButton" type="button">USER</button></Link>
                    </div>
                    <div className="navButtonContainer">
                        <Link to="/registrationlogin">
                            <button className="navBut" id="loginButton" type="button">USER</button>
                        </Link>
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
            </div>
        </header>
    );
}

export default Header;
