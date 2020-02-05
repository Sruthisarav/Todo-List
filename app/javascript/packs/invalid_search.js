import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import Invalid from '../components/Search/Invalid'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Invalid />,
        document.body.appendChild(document.createElement('div')),
    )
})