import React from 'react';
import logo from '../../assets/2ndStore-black.svg';
import './Footer.css';

const Footer = (props) =>
    <footer className="footer">
        <div className="footer__gray">
        </div>
        <div className="footer__darkGray">
        </div>
        <div className="footer__orange">
            <img 
                src={logo} 
                alt="logo"
                className="footer__logo" 
            />
        </div>
        <nav className="footer__navigation">
            <ul className="footer__navigationList">
                {props.navigation.map(item =>
                    <li 
                        key={item.id}
                        className="footer__navigationListItem">
                        <a href={item.link} className="footer__navigationLink">
                            {item.value}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
        <div className="footer__social">
            <p className="footer__copy">
                Handmade with love since 2017
            </p>
        </div>
    </footer>

export default Footer;