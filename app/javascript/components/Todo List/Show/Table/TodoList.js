import React, { Component } from 'react'
import './TodoList.css'
import Tag from './Tag'
import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo_item: this.props.todo_item,
            completed: this.props.todo_item.completed_at
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = () => { this.props.onClick(this.props.todo_item.id) }

    handleDelete = () => { this.props.onDelete(this.props.todo_item.id) }

    handleBlur = (time) => {
        const todo_item = { completed_at: time }
        axios.put(
            `/api/v1/todo_lists/${this.props.todo_item.todo_list_id}/todo_items/${this.props.todo_item.id}`,
            { todo_item: todo_item }
        )
            .then(response => {
                console.log(response.data)
                this.setState({ todo_item: todo_item, completed: todo_item.completed_at });
                this.props.update(this.response.data);
            })
            .catch(error => console.log(error.response))
    }

    handleChange = (e) => {
        this.state.completed = e.target.checked
        if (this.state.completed) {
            this.handleBlur(new Date());
        } else {
            this.handleBlur(null);
        }
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
        if (this.state.todo_item.list_of_tags === undefined) {
            return (
                <ul className="tag">
                    <Tag tags={this.props.todo_item.list_of_tags} />
                </ul>
            )
        } else {
            return (
                <ul className="tag">
                    <Tag tags={this.state.todo_item.list_of_tags} />
                </ul>
            )
        }
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
                            <p className="item completed" >
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