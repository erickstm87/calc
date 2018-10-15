import React, { Component } from 'react';
import './Input.css';

// export const Input = props => ;

export default class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='input'>{this.props.input}</div>
        )
    }
}