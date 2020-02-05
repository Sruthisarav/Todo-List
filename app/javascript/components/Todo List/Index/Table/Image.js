import React from 'react'

const Image = () => {
    return (
        <div className="pt-4 pb-4">
            <img src={require('./images/todolist.jpg')} alt="Todo List" style={{ width: "200px", height: "200px" }} />
        </div>
    )
}

export default Image