import React, {Component} from 'react'
import Table from './Table/Table'

class Home extends Component {
    constructor(props) {
        super()

        this.state = {
            todo_lists: [
                {
                    id: 1, title: 'Sample Todo List',
                    description: 'Sample Description'
                },
                {
                    id: 2, title: 'Sample Todo List 2',
                    description: 'Sample Description 2'
                },
                {
                    id: 3, title: 'Sample Todo List 3',
                    description: 'Sample Description 3'
                }
            ]
        }
    }
    render() {
        return (
            <div><Table todo_lists = {this.state.todo_lists}/></div>
        )
    }
}

export default Home