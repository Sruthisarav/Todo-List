import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import Main from '../components/Todo List/Show/Main'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Main />,
        document.body.appendChild(document.createElement('div')),
    )
})