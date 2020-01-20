import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import NavbarMain from '../components/Navbar/NavbarMain'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <NavbarMain />,
        document.body.appendChild(document.createElement('div')),
    )
})