import React, { Component } from 'react';
import './App.css';

class Counter extends Component{
    render(){
        const { name, number } = this.props
        return(
            <div className="Counter">
                <p className="Number">{number}</p>
                <p className="CounterName">{name}</p>
            </div>
        )
    }
}

export default Counter;