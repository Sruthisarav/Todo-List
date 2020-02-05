import React, { Component } from 'react';
import Image from "./Image";
import Item from "./Item";
import ItemForm from './ItemForm'

const ItemBox = (props) => {
    const item = () => {
        if (props.editingTodoListId === props.id) {
            return (<ItemForm key={props.id} title={props.title} 
                description={props.description} updateTodoList={props.updateTodoList}/>)
        } else {
            return (<Item key={props.id} title={props.title} description={props.description} />)
        }
    }
    return (
        <div className="row pt-4 pb-4">
            <div className="col-md-10 offset-md-1">
                <div>
                    <div className="card px-5">
                        <div className="row">
                            <div className="col-md-4">
                                <Image />
                            </div>
                            {item}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemBox