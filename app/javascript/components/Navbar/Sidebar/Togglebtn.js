import React from 'react'

import './Togglebtn.css'

const Togglebtn = props => (
    <button className="toggle-btn" onClick={props.click}>
        <div className="toggle-btn-line" />
        <div className="toggle-btn-line" />
        <div className="toggle-btn-line" />
    </button>
);

export default Togglebtn;