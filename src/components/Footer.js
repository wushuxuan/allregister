import React, { Component } from 'react';
import './Header.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <ul>
                    {
                        this.props.arrList.map(function(item){
                            return <li key={item.name}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Footer;