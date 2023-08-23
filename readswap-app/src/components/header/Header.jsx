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
                            <h1>ReadSwap</h1>
                            <h2>Why buy when you can Swap!</h2>
                        </div>
                <nav ref={navRef}>
                    <div classs="textcontainer">
                    <a href = "/#">HOME</a>
                    <a href = "/bookslisting"> BOOKS </a>
                    <a href = "/forum"> FORUM </a>
                    <a href = "/aboutus"> ABOUT US </a>
                    </div><br></br>
            
                    <input placeholder='Search...' class="searchtab"></input>
                
                    <button class="nav-button"> 
                        <HiUserCircle size={27}/>
                    </button> 

                    <button  class="nav-button-01"> 
                        <Link to="/cart"> <HiShoppingCart  size={27}/> </Link> 
                    </button> 

                    <Link to="/registrationlogin">
                        <button class="login-button">
                        REGISTER | LOGIN
                        </button>
                    </Link>
                    
                    <button  class="button"  onClick={showNavbar}>
                        <FaTimes />
                    </button>
                
                </nav>
                <button  class="button" onClick={showNavbar}>
                    <FaBars/> 
                </button>
            </div>
        </header>
    );
}

export default Header; 