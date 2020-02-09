import React, { Component } from 'react'

import '../Todo List/Show/Table/TodoList.css'
import './Item.css'


class Item extends Component {
    content = () => {
        return this.props.todo_item.content == ""
            ? "New Task"
            : this.props.todo_item.content
    }

    render() {
        return (
            <div className="space">
                <div className="todo_items">
                    <div className="list" id={this.props.todo_item.id} key={this.props.todo_item.id} >
                        <p className="item incomplete item-search" >
                            <this.content />
                        </p>
                        <a href={"/todo_lists/" + this.props.todo_item.todo_list_id}>
                            <button type="button" className="tag-btn btn-outline-primary btn-rounded waves-effect btn cta-btn">
                                View Todo List <i className="fa fa-eye"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item