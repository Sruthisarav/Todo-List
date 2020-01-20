import React, {Component} from 'react'
import Table from './Table/Table'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div><Table todo_lists = {this.props.todo_lists}/></div>
        )
    }
}

export default Home