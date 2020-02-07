import React, { Component } from 'react'
import axios from 'axios'
import './TodoItemForm.css'

class TodoItemForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: this.props.todo_item.content,
            list_of_tags: this.props.todo_item.list_of_tags
        }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleBlur = () => {
        const todo_item = { content: this.state.content, list_of_tags: this.state.list_of_tags}
        axios.put(
            `/api/v1/todo_lists/${this.props.todo_item.todo_list_id}/todo_items/${this.props.todo_item.id}`,
            { todo_item: todo_item }
        )
            .then(response => {
                console.log(response)
                this.props.updateTodoItem(response.data)
            })
            .catch(error => console.log(error.response))
    }

    render() {
        return (
            <div className="tile">
                <form onBlur={this.handleBlur} className="list" >
                    <input className='input' type="text" name="content" placeholder='Enter a Task'
                        value={this.state.content || ""} onChange={this.handleInput}
                        ref={this.props.titleRef} />
                    <input className='input' type="text" name="list_of_tags" placeholder='Enter tags'
                        value={this.state.list_of_tags} onChange={this.handleInput} />
                    <button onClick={this.handleInput}>Enter</button>
                </form>
            </div>
        );
    }
}

export default TodoItemForm