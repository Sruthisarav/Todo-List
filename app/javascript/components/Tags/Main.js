import React, { Component } from 'react'
import axios from 'axios'

import TodoItem from './TodoItem'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo_items: [],
            tag: props.tag
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/v1/tags/${this.state.tag.id}`)
            .then(response => {
                this.setState({ todo_items: response.data })
            })
            .catch(error => console.log(error.response.data))
    }

    render() {
        return (
            <div>
                <h1>Todo items tagged with: {this.state.tag.name}</h1>
                <TodoItem todo_items={this.state.todo_items} />
            </div>
        );
    }
}

export default Main