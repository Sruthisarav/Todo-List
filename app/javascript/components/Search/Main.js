import React, { Component } from 'react'
import axios from 'axios'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = [...event.target.elements].reduce((data, element) => {
            if (element.name && element.value) {
                data[element.name] = element.value;
            }
            return data;
        }, {});
        this.state.search = data.tag_search;
        window.location.href = "/search?search=" + this.state.search
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="tag_search" />
                <button>Search</button>
            </form >
        );
    }
}

export default Main