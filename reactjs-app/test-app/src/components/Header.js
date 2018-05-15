import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
    return (
        <nav className="header-nav">
            <div>
                <span className="logo"></span>
                <ul className="nav-list">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;

