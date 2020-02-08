import React, { Component } from 'react'

import './TodoList.css'

class TodoList extends Component {

    handleDelete = () => { this.props.onDelete(this.props.todo_list.id) }

    render() {
        return (
            <div className="col-md-8 container">
                <div className="pt-4 pb-4">
                    <h4>{this.props.todo_list.title}</h4>
                    <p>{this.props.todo_list.description}</p>
                    <div className="cta-wrapper">
                        <a href={"/todo_lists/" + this.props.todo_list.id}>
                            <button type="button" className="todo-btn btn-outline-primary btn-rounded waves-effect btn cta-btn">
                                View <i className="fa fa-eye"></i>
                            </button>
                        </a>
                        <a href={"/todo_lists/" + this.props.todo_list.id + "/edit"}>
                            <button type="button" className="todo-btn btn-outline-primary btn-rounded waves-effect btn cta-btn">
                                Edit <i className="fa fa-pencil"></i>
                            </button>
                        </a>
                        <button type="button" 
                            className="todo-btn btn-outline-primary btn-rounded waves-effect btn cta-btn"
                            onClick={this.handleDelete}>
                            Delete <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList