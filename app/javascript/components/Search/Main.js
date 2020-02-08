import React, { Component } from 'react'
import './Main.css'

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
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Tag Search" name="tag_search" />
                    <input type="submit" hidden />
                    <div className="search"></div>
                </form >
            </div>
        );
    }
}

export default Main