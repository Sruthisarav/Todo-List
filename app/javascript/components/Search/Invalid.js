import React, { Component } from 'react'

import './Invalid.css'

class Invalid extends Component {

    render() {
        return (
            <div className="text-font" >
                <h1 className="invalid">Invalid Search</h1>
                <h4 className="message">Please type tags that exist</h4>
            </div>
        );
    }
}

export default Invalid