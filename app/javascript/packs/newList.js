import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import NewTodoList from '../components/Todo List/Index/New Todo List/NewTodoList.js'

const todo_list = { title:'', description:'' };

ReactDOM.render(
    <NewTodoList new={true} todo_list={todo_list} />,
    document.getElementById('form')
)