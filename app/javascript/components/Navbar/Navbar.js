import React from 'react';
import Togglebtn from './Sidebar/Togglebtn'
import './Navbar.css';

const navbar = props => (
    <header className = "navbar">
        <nav className = "navbar_navigation">
            <div className = "navbar_toggle_btn">
                <Togglebtn click = {props.barClickHandler} />
            </div>
            <div className = "navbar_logo"><a href="The logo">My App</a></div>
            <div className = "space"></div>
            <div className = "navbar_navigation_items">
                <ul>
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">Instructions</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar