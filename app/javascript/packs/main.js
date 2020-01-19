import React, {Component} from 'react';
import Navbar from '../components/Navbar/Navbar';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <div className="main">
            <Navbar />
        </div>,
        document.body.appendChild(document.createElement('div')),
    )
})