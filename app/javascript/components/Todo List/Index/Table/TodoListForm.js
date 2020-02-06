import React, { Component } from 'react'
import axios from 'axios'

class TodoListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.todo_list.title,
            description: this.props.todo_list.description
        }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleBlur = () => {
        const todo_list = { title: this.state.title, description: this.state.description }
        axios.put(
            `api/v1/todo_lists/${this.props.todo_list.id}`,
            { todo_list: todo_list }
        )
            .then(response => {
                console.log(response)
                this.props.updateTodoList(response.data)
            })
            .catch(error => console.log(error.response.data))
    }

    render() {
        return (
            <div className="tile">
                <form onBlur={this.handleBlur} >
                    <input className='input' type="text" name="title" placeholder='Enter a Title'
                        value={this.state.title} onChange={this.handleInput}
                        ref={this.props.titleRef} />
                    <textarea className='input' name="description" placeholder='Describe your todo list'
                        value={this.state.description} onChange={this.handleInput}></textarea>
                </form>
            </div>
        );
    }
}

export default TodoListForm