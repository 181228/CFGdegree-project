import React, { useRef, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import './header.css';

function Header() {
    const navRef = useRef();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchValue}`);
    };

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
                        <a href="/">HOME</a>
                        <a href="/bookslisting"> BOOKS </a>
                        <a href="/upload"> UPLOAD </a>
                        <a href="/forum"> FORUM </a>
                        <a href="/about"> ABOUT US </a>
                    </div>
                    <br />
                    <div className="nav-middle-line">
                        <div className="searchItems">
                            {/* Use SearchBar component with passing props */}
                            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} handleSearchSubmit={handleSearchSubmit} />
                        </div>
                        <button className="nav-button-01">
                            <Link to="/cart">
                                <HiShoppingCart size={27} />
                            </Link>
                        </button>
                        <Link to="/login">
                            <button className="login-button">LOGIN</button>
                        </Link>
                    </div>
                    <button className="button" >
                        <FaTimes onClick={showNavbar} />
                    </button>
                </nav>
                <button className="button" >
                    <FaBars onClick={showNavbar} />
                </button>
            </div>
        </header>
    );
}

export default Header;