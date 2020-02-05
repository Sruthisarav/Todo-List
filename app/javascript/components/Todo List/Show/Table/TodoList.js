import React, { Component } from 'react'
import './TodoList.css'
import Tag from './Tag'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completed: this.props.todo_item.completed
        }
    }

    handleClick = () => { this.props.onClick(this.props.todo_item.id) }

    handleDelete = () => { this.props.onDelete(this.props.todo_item.id) }

    handleComplete = () => {
        if (this.state.completed) {
            return "completed"
        }
        return "incomplete"
    }

    handleChange = (e) => { 
        this.props.todo_item.completed = e.target.checked
        this.state.completed = this.props.todo_item.completed
        this.props.update(this.props.todo_item) 
    }

    todo_item = () => {
        if (this.state.completed) {
            return (
            <p onClick={this.handleClick} className="completed" >
                {this.props.todo_item.content}
                <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete}></i>
            </p>
            )
        } else {
            return (
                <p onClick={this.handleClick} className="incomplete" >
                    {this.props.todo_item.content}
                    <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete}></i>
                </p>
            )
        }
    }


    render() {
        return (
            <div className="todo_items">
                <div className="list" id={this.props.todo_item.id} key={this.props.todo_item.id} >
                    <input type="checkbox" className="box" onChange={this.handleChange} />
                    <this.todo_item />
                    <Tag tags={this.props.todo_item.list_of_tags} />
                </div>
            </div>
        )
    }
}

export default TodoList