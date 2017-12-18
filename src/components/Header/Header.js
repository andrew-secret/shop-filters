import React from 'react';
import logo from '../../assets/2ndStore-logo.svg';
import './Header.css';


const Header = props => {
    return(
        <header className="header">
            <div className="header-accent">
                <span className="stripe-element stripe-element--1">
                </span>
                <span className="stripe-element stripe-element--2">
                </span>
                <span className="stripe-element stripe-element--3">
                </span>
            </div>
            <img src={logo}
                className="logo"
                alt="seesh logo"/>
        </header>
    )
};

export default Header;