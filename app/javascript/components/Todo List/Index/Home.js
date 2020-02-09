import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'

import './Home.css'

import TodoBox from './Table/TodoBox'

class Home extends Component {
    _isMounted = false
    constructor(props) {
        super(props)
        this.state = {
            todo_lists: [],
            transitionIn: false
        }
    }

    componentDidMount() {
        this._isMounted = true;
        axios.get(`/api/v1/todo_lists.json`)
            .then(response => {
                if (this._isMounted) {
                    this.setState({ todo_lists: response.data });
                }
            })
            .catch(error => console.log(error.response));
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    updateTodoList = (todo_list) => {
        const todoListIndex = this.state.todo_lists.findIndex(x => x.id === todo_list.id)
        const todo_lists = update(this.state.todo_lists, { [todoListIndex]: { $set: todo_list } })
        this.setState({ todo_lists: todo_lists, transitionIn: true })
    }

    deleteTodoList = (id) => {
        axios.delete(`/api/v1/todo_lists/${id}`)
            .then(response => {
                const todoListIndex = this.state.todo_lists.findIndex(x => x.id === id)
                const todo_lists = update(this.state.todo_lists, { $splice: [[todoListIndex, 1]] })
                this.setState({ todo_lists: todo_lists })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <div>
                    <a href="/todo_lists/new">
                        <button type="button"
                            className="newTodoListButton btn-outline-primary btn-rounded waves-effect btn cta-btn">
                            New List <i className="fa fa-plus-circle"></i></button>
                    </a>
                </div>
                <div className="todo-lists">
                    {this.state.todo_lists.map((todo_list) => {
                        return (<TodoBox todo_list={todo_list} key={todo_list.id}
                            onDelete={this.deleteTodoList} />)
                    })}
                </div>
            </div>
        );
    }
}

export default Home