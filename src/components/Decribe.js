import React, { Component } from 'react';
import './Header.css';

class Decribe extends Component {
    render() {
        return (
            <div className="Decribe">
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

export default Decribe;