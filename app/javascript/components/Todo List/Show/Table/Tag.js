import React, { Component } from 'react'
import './Tag.css'

class Tag extends Component {
    tags = () => {
        if (this.props.tags === undefined) {
            return <li></li>
        } else {
            return (
                <div className="tags">
                    {this.props.tags.map((tag) => {
                        const name = " " + tag.name
                        return (
                            <li>
                                <a className="tag-link" href={"/tags/" + tag.id} key={tag.id}>
                                    {name}
                                </a>
                            </li>
                        );
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <this.tags />
        )
    }
}

export default Tag