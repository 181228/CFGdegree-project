import "./header.css";
import { useRef } from 'react';
import {HiUserCircle} from 'react-icons/hi';
import { HiShoppingCart } from "react-icons/hi";
import {FaBars} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from "react";

function Header(){
    const navRef = useRef ();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <div className="header-inner">
                <img className="logo" alt="Logo" src={require('../../utils/Logo_small.png')} />
                        <div className="headText">
                            <h1 className="web-title">ReadSwap</h1>
                            <h2 className="web-subtitle">Why buy when you can Swap!</h2>
                        </div>
                <nav ref={navRef}>
                    <div className="textcontainer">
                    <a href = "/#">HOME</a>
                    <a href = "/bookslisting"> BOOKS </a>
                    <a href = "/upload"> UPLOAD </a>
                    <a href = "/forum"> FORUM </a>
                    <a href = "/aboutus"> ABOUT US </a>
                    </div><br></br>
                    <div className="nav-middle-line">
                    <input placeholder='Search...' className="searchtab"></input>
                
                    <button className="nav-button"> 
                        <HiUserCircle size={27}/>
                    </button> 

                    <button  className="nav-button-01"> 
                        <Link to="/cart"> <HiShoppingCart  size={27}/> </Link> 
                    </button> 

                    <Link to="/login">
                        <button className="login-button">
                        REGISTER | LOGIN
                        </button>
                    </Link>
                    </div>
                    
                    <button  className="button"  onClick={showNavbar}>
                        <FaTimes />
                    </button>
                
                </nav>
                <button  className="button" onClick={showNavbar}>
                    <FaBars/> 
                </button>
            </div>
        </header>
    );
}

export default Header; 