import React, { Component } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar'
import Backdrop from './Backdrop/Backdrop'

class NavbarMain extends Component {
    state = {
        sideBarOpen: false
    };

    sideBarClickHandler = () => {
        this.setState((prevState) => {
            return { sideBarOpen: !prevState.sideBarOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideBarOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideBarOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <div style={{ height: '100%' }}>
                <Navbar barClickHandler={this.sideBarClickHandler} />
                <Sidebar show={this.state.sideBarOpen} />
                {backdrop}
            </div>
        );
    }
}

export default NavbarMain