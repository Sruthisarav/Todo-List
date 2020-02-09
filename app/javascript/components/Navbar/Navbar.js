import React from 'react';
import './Navbar.css';

import Togglebtn from './Sidebar/Togglebtn'
import Search from '../Search/Main.js'

const navbar = props => (
    <header className="navbar">
        <nav className="navbar_navigation">
            <div className="navbar_toggle_btn">
                <Togglebtn click={props.barClickHandler} />
            </div>
            <div className="navbar_logo"><a href="The logo">Todo List App</a></div>
            <div className="space"></div>
            <div className="search"><Search /></div>
            <div className="space"></div>
            <div className="navbar_navigation_items">
                <ul>
                    <li><a href="/todo_lists"><i className="fa fa-home"></i> Home</a></li>
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">Instructions</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar