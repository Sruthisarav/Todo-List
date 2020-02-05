import React, { Component } from 'react'

import Item from './Item'

class TodoItem extends Component {

    render() {
        return (
            <ul>
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