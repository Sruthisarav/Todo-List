import React from 'react';
import { Component } from 'react'
import './ListItems.css';

class ListItems extends Component {
    render() {
        return (
            <div className = "todo_items">
                {this.props.items.map(item => {
                    return <div className="list" id={item.id} key ={item.id} >
                        <p>
                        {item.content}
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        </p>
                    </div>
                })}
            </div>
        )
    }
}

export default ListItems