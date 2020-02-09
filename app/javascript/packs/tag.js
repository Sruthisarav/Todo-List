import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import Main from '../components/Tags/Main'

const node = document.getElementById('tag_data');
const tag = JSON.parse(node.getAttribute('data'));

ReactDOM.render(
    <Main tag={tag} />,
    document.getElementById('tag')
)