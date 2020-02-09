import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'

import './Main.css'

import TodoBox from './Table/TodoBox'
import TodoItemForm from './Table/TodoItemForm'

class Main extends Component {
    _isMounted = false
    constructor(props) {
        super(props)
        this.state = {
            todo_list_id: this.props.todo_list.id,
            todo_items: [],
            editingTodoItemId: null,
            transitionIn: false
        }
    }

    componentDidMount() {
        this._isMounted = true
        axios.get(`/api/v1/todo_lists/${this.state.todo_list_id}/todo_items.json`)
            .then(response => {
                if (this._isMounted) {
                    this.setState({ todo_items: response.data });
                }
            })
            .catch(error => console.log(error.response.data))
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    addNewTodoItem = () => {
        axios.post(`/api/v1/todo_lists/${this.state.todo_list_id}/todo_items`,
            { todo_item: { content: '', list_of_tags: [] } })
            .then(response => {
                console.log(response.data)
                const todo_items = update(this.state.todo_items,
                    { $splice: [[0, 0, response.data]] })
                this.setState({ todo_items: todo_items, editingTodoItemId: null })
            })
            .catch(error => console.log(error.response.data))
    }

    updateTodoItem = (todo_item) => {
        const todoItemIndex = this.state.todo_items.findIndex(x => x.id === todo_item.id)
        const todo_items = update(this.state.todo_items, { [todoItemIndex]: { $set: todo_item } })
        this.setState({ todo_items: todo_items, transitionIn: true })
    }

    deleteTodoItem = (id) => {
        axios.delete(`/api/v1/todo_lists/${this.state.todo_list_id}/todo_items/${id}`)
            .then(response => {
                const todoItemIndex = this.state.todo_items.findIndex(x => x.id === id)
                const todo_items = update(this.state.todo_items, { $splice: [[todoItemIndex, 1]] })
                this.setState({ todo_items: todo_items })
            })
            .catch(error => console.log(error))
    }

    enableEditing = (id) => {
        this.setState({ editingTodoItemId: id }, () => { this.title.focus() })
    }

    render() {
        return (
            <div className="todo-container">
                <div className="header">
                    <h1 className="title">{this.props.todo_list.title}</h1>
                    <p className="description">{this.props.todo_list.description}</p>
                </div>
                <div className="box" onClick={this.addNewTodoItem}>
                    <div className="btn add-btn">
                        <p className="icon">
                            Add task <i className="fa fa-plus"></i>
                        </p>
                    </div>
                </div>
                <div className="items">
                    {this.state.todo_items.map((todo_item) => {
                        if (this.state.editingTodoItemId === todo_item.id) {
                            return (<TodoItemForm todo_item={todo_item} key={todo_item.id} updateTodoItem={this.updateTodoItem}
                                titleRef={input => this.title = input} />)
                        } else {
                            return (<TodoBox todo_item={todo_item} key={todo_item.id} onClick={this.enableEditing}
                                onDelete={this.deleteTodoItem} update={this.updateTodoItem} />)
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default Main