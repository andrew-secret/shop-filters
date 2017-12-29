import React from 'react';
import './Header.css';

const Header = (props) =>
    <header className="startpageHeader">
        <div className="startpageHeader__visual">
        </div>
        <div className="startpageHeader__red">
        </div>
        <div className="startpageHeader__visualSmall">
        </div>
        <div className="startpageHeader__yellow">
        </div>
        <nav className="startpageHeader__navigation">
            <label 
                className="toggleMenu"
                htmlFor="show-menu">
                <span className="title">
                    Menu
                </span>
            </label>
            <input type="checkbox" id="show-menu" />
            <ul className="navigationList">
                {props.navigation.map(item =>
                    <li key={item.id} 
                        className="navigationItem">
                        <a href={item.link}>
                            {item.value}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
        <div className="startpageHeader__yellowLarge">
        </div>
        <div className="startpageHeader__blueLarge">
        </div>
        <div className="startpageHeader__whiteLarge">
        </div>
        <div className="startpageHeader__blackLarge">
        </div>
    </header>

export default Header;