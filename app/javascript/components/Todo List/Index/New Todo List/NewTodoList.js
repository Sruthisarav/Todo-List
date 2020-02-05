import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'

class NewTodoList extends Component {
    addNewTodoList = () => {
        axios.post(
            'http://localhost:3001/api/v1/todo_lists',
            { todo_list: { title: '', description: '', } }
        )
            .then(response => {
                console.log(response)
                const todo_lists = update(this.state.todo_lists, {
                    $splice: [[0, 0, response.data]]
                })
                this.setState({ todo_lists: todo_lists })
            })
            .catch(error => console.log(error.response.data))
    }
    render() {
        return (
            <button className="new-todo-list-btn" onClick={this.addNewTodoList}>
                New Todo List
            </button>
        )
    }
}

export default NewTodoList