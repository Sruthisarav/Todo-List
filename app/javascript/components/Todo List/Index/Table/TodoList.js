import React, { Component } from 'react'

class TodoList extends Component {
    handleClick = () => { this.props.onClick(this.props.todo_list.id) }

    handleDelete = () => { this.props.onDelete(this.props.todo_list.id) }

    render() {
        return (
            <div className="col-md-8">
                <div className="pt-4 pb-4">
                    <h4 onClick={this.handleClick}>{this.props.todo_list.title}</h4>
                    <p onClick={this.handleClick}>{this.props.todo_list.description}</p>
                    <div className="cta-wrapper">
                        <a href={"/todo_lists/" + this.props.todo_list.id}>
                            <button type="button" className="btn-outline-primary btn-rounded waves-effect btn cta-btn">
                                View Todo List <i className="fa fa-eye"></i>
                            </button>
                        </a>
                        <button type="button" className="btn-outline-primary btn-rounded waves-effect btn cta-btn">
                            Edit <i className="fa fa-pencil"></i>
                        </button>
                        <button type="button" 
                            className="btn-outline-primary btn-rounded waves-effect btn cta-btn"
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