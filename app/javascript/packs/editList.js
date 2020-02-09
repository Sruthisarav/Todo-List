import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import NewTodoList from '../components/Todo List/Index/New Todo List/NewTodoList.js'

const node = document.getElementById('todo-list_data');
const todo_list = JSON.parse(node.getAttribute('data'));

ReactDOM.render(
    <NewTodoList todo_list={todo_list} />,
    document.getElementById('form')
)