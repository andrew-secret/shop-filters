import React from 'react';
import logo from '../../assets/seesh-logo.svg';
import './Header.css';


const Header = props => {
    return(
        <header className="header">
            <img src={logo}
                className="logo"
                alt="seesh logo"/>
        </header>
    )
};

export default Header;