import React, { Component } from 'react';
import './NewTodo.css';
import TodoItem from './TodoItem';

class NewTodo extends Component {
    render() {
        return (
            <div className = "new-todo">
                <header>
                    <form id="todo-form">
                        <input type="text" placeholder="New Task" />
                        <button type="submit">Add Task</button>
                    </form>
                </header>
                <body>
                    <TodoItem />
                </body>
            </div>
        );
    }
}
export default NewTodo;