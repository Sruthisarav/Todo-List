import React, { Component } from 'react'

import Item from './Item'
import './Item.css'

class TodoItem extends Component {
    render() {
        return (
            <ul className="tag-search-list">
                {this.props.todo_items.map((todo_item) => {
                    return (
                        <li>
                            <Item todo_item={todo_item} key={todo_item.id} />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default TodoItem