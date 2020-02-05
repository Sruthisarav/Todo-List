import React, { Component } from 'react';
import ListItems from './ListItems'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[
                { content: 'sleepy', id: 1 },
                { content: 'tired', id: 2 },
                { content: 'exhausted', id: 3 }
            ]
        }
    }
    render() {
        return(
            <ListItems items={this.state.items} />
        );
    }
}
export default TodoItem;