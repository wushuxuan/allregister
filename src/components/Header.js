import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
        <div className="Header">
            <h2>{this.props.title}</h2>
            <h4>{this.props.descirbe}</h4>
        </div>
        )
    }
}

export default Header;