import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'

import TodoBox from './Table/TodoBox'
import TodoListForm from './Table/TodoListForm'

class Home extends Component {
    baseURL = () => process.env.baseURL || "http://localhost:3001";
    constructor(props) {
        super(props)
        this.state = {
            todo_lists: [],
            editingTodoListId: null,
            transitionIn: false
        }
    }

    componentDidMount() {
        axios.get(`/api/v1/todo_lists.json`)
            .then(response => {
                this.setState({ todo_lists: response.data });
                window.location.reload();
            })
            .catch(error => console.log(error.response))
    }

    addNewTodoList = () => {
        axios.post('/api/v1/todo_lists', 
        { todo_list: { title: '', description: '' } })
            .then(response => {
                const todo_lists = update(this.state.todo_lists, 
                    { $splice: [[0, 0, response.data]] })
                this.setState({ todo_lists: todo_lists, editingTodoListId: response.data.id })
            })
            .catch(error => console.log(error.response.data))
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

    enableEditing = (id) => {
        this.setState({ editingTodoListId: id }, () => { this.title.focus() })
    }

    render() {
        return (
            <div>
                <div>
                    <button type="button" onClick={this.addNewTodoList} 
                        className="newTodoListButton btn-outline-primary btn-rounded waves-effect btn cta-btn">
                        <i className="fa fa-plus-circle"></i>
                    </button>
                </div>
                {this.state.todo_lists.map((todo_list) => {
                    if (this.state.editingTodoListId === todo_list.id) {
                        return (<TodoListForm todo_list={todo_list} key={todo_list.id} updateTodoList={this.updateTodoList}
                            titleRef={input => this.title = input} />)
                    } else {
                        return (<TodoBox todo_list={todo_list} key={todo_list.id} onClick={this.enableEditing}
                            onDelete={this.deleteTodoList} />)
                    }
                })}
            </div>
        );
    }
}

export default Home