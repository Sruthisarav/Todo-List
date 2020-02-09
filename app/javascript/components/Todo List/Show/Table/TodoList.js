import React, { Component } from 'react'
import './TodoList.css'
import Tag from './Tag'
import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completed: this.props.todo_item.completed_at
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = () => { this.props.onClick(this.props.todo_item.id) }

    handleDelete = () => { this.props.onDelete(this.props.todo_item.id) }

    handleBlur = (time) => {
        const todo_item = { completed_at: time }
        axios.patch(
            `/api/v1/todo_lists/${this.props.todo_item.todo_list_id}/todo_items/${this.props.todo_item.id}`,
            { todo_item: todo_item }
        )
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error.response))
    }

    handleChange = (e) => {
        this.state.completed = event.target.checked
        if (this.state.completed) {
            this.handleBlur(new Date()); 
        } else {
            this.handleBlur(null);
        }
        this.props.update(this.props.todo_item)
    }

    check_box = () => {
        return (
            <div className="check-container">
                <input type="checkbox" className="box check-box" onChange={this.handleChange} />
                <label><div></div></label>
            </div>
        )
    }

    items = () => {
        return (
            <ul className="tag">
                <Tag tags={this.props.todo_item.list_of_tags} />
            </ul>
        )
    }

    content = () => {
        return this.props.todo_item.content == ""
            ? "New Task"
            : this.props.todo_item.content
    }

    todo_item = () => {
        if (this.state.completed) {
            return (
                <div className="space">
                    <div className="completed-container">
                        <div className="list" id={this.props.todo_item.id} key={this.props.todo_item.id} >
                            <div className="check-container">
                                <input type="checkbox" className="box check-box" onChange={this.handleChange} checked />
                                <label><div></div></label>
                            </div>
                            <p onClick={this.handleClick} className="item completed" >
                                <this.content />
                            </p>
                            <this.items />
                            <i className="fa fa-trash de" aria-hidden="true" onClick={this.handleDelete}></i>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="space">
                    <div className="todo_items">
                        <div className="list" id={this.props.todo_item.id} key={this.props.todo_item.id} >
                            <this.check_box />
                            <p onClick={this.handleClick} className="item incomplete" >
                                <this.content />
                            </p>
                            <this.items />
                            <i className="fa fa-trash de" aria-hidden="true" onClick={this.handleDelete}></i>
                        </div>
                    </div>
                </div>
            )
        }
    }


    render() {
        return (
            <this.todo_item />
        )
    }
}

export default TodoList