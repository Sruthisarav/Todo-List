import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import Main from '../components/Todo List/Show/Main'
import { BrowserRouter as Router, Route } from "react-router-dom";

document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById('todo-list_data');
    const todo_list = JSON.parse(node.getAttribute('data'));
    ReactDOM.render(
        <Router>
            <Route path="/todo_lists/:todo_list" component={() => <Main todo_list_id={todo_list.id} />} />
        </Router>,
        document.body.appendChild(document.createElement('div')),
    )
})