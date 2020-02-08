import React, { Component } from 'react'
import axios from 'axios'

import './NewTodoList.css'

class NewTodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new: this.props.new,
            title: this.props.todo_list.title,
            description: this.props.todo_list.description
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    addNewTodoList = (todo_list) => {
        axios.post('/api/v1/todo_lists', {todo_list})
            .then(response => {
                this.setState({ new: false })
            })
            .catch(error => console.log(error.response))
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleBlur = () => {
        const todo_list = { title: this.state.title, description: this.state.description }
        axios.put(
            `/api/v1/todo_lists/${this.props.todo_list.id}`,
            { todo_list: todo_list }
        )
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error.response.data))
    }

    handleSubmit(event) {
        if (this.state.new) {
            const todo_list = { title: this.state.title, description: this.state.description }
            this.addNewTodoList(todo_list);
        } else {
            this.handleBlur();
        }
    }
    render() {
        return (
            <div class="form-style">
                <h1>New Todo List</h1>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" name="title" value={this.state.title}
                        onChange={this.handleInput} placeholder="Title of list" />
                    <textarea name="description" placeholder="Describe your list"
                        value={this.state.description} onChange={this.handleInput}></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default NewTodoList