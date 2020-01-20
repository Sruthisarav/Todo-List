import React from 'react'

import './Sidebar.css'

const sideBar = props => {
    let barClasses = 'sidebar';
    if (props.show) {
        barClasses = 'sidebar open'
    }
    return (
        <nav className = {barClasses}>
            <ul>
                <li><a href="/">About Me</a></li>
                <li><a href="/">Instructions</a></li>
            </ul>
        </nav>
    );
};

export default sideBar;