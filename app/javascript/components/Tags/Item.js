import React, { Component } from 'react'


class Item extends Component {

    render() {
        return (
            <div>
                <div className="cta-wrapper">
                    <h4 >{this.props.todo_item.content}</h4>
                    <p >{this.props.todo_item.list_of_tags}</p>
                    <a href={"/todo_lists/" + this.props.todo_item.todo_list_id}>
                        <button type="button" className="btn-outline-primary btn-rounded waves-effect btn cta-btn">
                            View Todo List <i className="fa fa-eye"></i>
                        </button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Item