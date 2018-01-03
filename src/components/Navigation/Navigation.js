import React from 'react';
import logo from '../../assets/2ndStore-black.svg';
import './Navigation.css';
import * as routes from '../../constants/routes';


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
            <a
                href={routes.STARTPAGE_VIEW}>
                <img src={logo}
                    className="logo"
                    alt="2ndStore logo"/>
            </a>
        </nav>
    )
};

export default Navigation;