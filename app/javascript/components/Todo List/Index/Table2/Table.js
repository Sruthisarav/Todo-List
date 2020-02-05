import React, {Component} from 'react'
import ItemBox from './ItemBox'

class Table extends Component {
    constructor(props) {
        super(props)
    }
    updateTodoList = (todo_list) => {
        const todo_listIndex = this.props.todo_lists.findIndex(x => x.id === todo_list.id)
        const todo_lists = update(this.props.todo_lists, {
            [todo_listIndex]: { $set: todo_list }
        })
        this.setState({ todo_lists: todo_lists })
    }
    render() {
        const items = this.props.todo_lists.map((data) => {
            return <ItemBox key={data.id} title={data.title} description={data.description} 
                editingTodoListId={this.props.editingTodoListId} id = {data.id}
                updateTodoList={this.updateTodoList}/>
        })

        return (
            <div className = "pt-5 pb-5">
                <div className = "container">
                    <div className = "text-center">
                        <h2 className = "pt-4 pb-4">Todo Lists: </h2>
                    </div>
                    {items}
                </div>
            </div>
        )
    }
}

export default Table