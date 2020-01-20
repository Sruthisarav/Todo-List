import React from 'react';

function ListItems(props) {
    const items = this.props.items;
    const listItems = items.map(item =>
        {
            return <div className = "list" id = {item.id}>
                <p>{item.content}</p>
            </div>
        });
    return(
        <div>{listItems}</div>
    );
}
export default ListItems;