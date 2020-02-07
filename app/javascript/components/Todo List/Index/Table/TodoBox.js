import React, { Component } from 'react';
import Image from "./Image";
import TodoList from "./TodoList";

class TodoBox extends Component {
    render() {
        return (<div className="row pt-4 pb-4">
            <div className="col-md-10 offset-md-1">
                <div>
                    <div className="card px-5">
                        <div className="row">
                            <div className="col-md-4">
                                <Image />
                            </div>
                            <TodoList todo_list={this.props.todo_list}
                                key={this.props.todo_list.id} onClick={this.props.onClick}
                                onDelete={this.props.onDelete} />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default TodoBox