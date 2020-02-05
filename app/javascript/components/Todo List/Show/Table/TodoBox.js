import React, { Component } from 'react';
import TodoList from "./TodoList";

class TodoBox extends Component {
    render() {
        return (
            <div className="row">
                <TodoList todo_item={this.props.todo_item}
                    key={this.props.todo_item.id} onClick={this.props.onClick}
                    onDelete={this.props.onDelete} update={this.props.update} />
            </div>
        )
    }
}

export default TodoBox