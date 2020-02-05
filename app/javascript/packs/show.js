import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import Main from '../components/Todo List/Show/Main'

document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById('todo-list_data');
    const todo_list = JSON.parse(node.getAttribute('data'));
    ReactDOM.render(
        <Main todo_list_id={todo_list.id} />,
        document.body.appendChild(document.createElement('div')),
    )
})