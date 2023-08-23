import "./navbar.css";
import { useRef } from 'react';
import {HiUserCircle} from 'react-icons/hi';
import { HiShoppingCart } from "react-icons/hi";
import {FaBars} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';


function Navbar(){
    const navRef = useRef ();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
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
                 <HiUserCircle width="100px"/>
                </button> 

                <button  class="nav-button"> 
                  <Link to="/cart"> <HiShoppingCart  width="100px"/> </Link> 
                </button> 

                <Link to="/registrationlogin">
                 <button class="login-button">
                   Regsiter/Login
                 </button>
                </Link>
                
                <button  class="button"  onClick={showNavbar}>
                    <FaTimes />
                </button>
            
            </nav>
            <button  class="button" onClick={showNavbar}>
                <FaBars/> 
            </button>
        </header>
    );
}

export default Navbar; 