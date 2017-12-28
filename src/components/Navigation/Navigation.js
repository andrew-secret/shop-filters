import React from 'react';
import logo from '../../assets/2ndStore-logo.svg';
import './Navigation.css';


const Navigation = props => {
    return(
        <nav className="Navigation">
            <div className="Navigation-accent">
                <span className="stripe-element stripe-element--1">
                </span>
                <span className="stripe-element stripe-element--2">
                </span>
                <span className="stripe-element stripe-element--3">
                </span>
            </div>
            <img src={logo}
                className="logo"
                alt="2ndStore logo"/>
        </nav>
    )
};

export default Navigation;