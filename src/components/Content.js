import React, { Component } from 'react';
import './Header.css';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <image src="./images/success.png"/>
                <h3>{this.props.results}</h3>
                <h5>{this.props.tips}</h5>
                <button type = "primary" onClick="history.go(-1)">返回</button>
            </div>
        )
    }
}

export default Content;