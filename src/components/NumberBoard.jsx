import React, {Component} from 'react';
import {Button} from './Button';
import numberKeys from '../stores/numberKeys';

export default class NumberBoard extends Component {
    constructor() {
        super();
        this.state = {
            input: '6'
        }
    }
    inputField = val => {
        this.setState({input: this.state.input + val});
    }
    handleTheClick = () => {
        console.log('this is: ', this);
    }
    render() {
        const rows = [];
        for(let i = 4; i <= numberKeys.length; i += 4){
            let row = numberKeys.slice(i-4, i).map((element, index) => <Button handleClick={(e) => this.handleTheClick(e)} key={element}>{element}</Button>);
            rows.push(<div className='row' key={i}>{row}</div>);
        }

        return(
            <div>
                {rows}
            </div>
        )
    }
} 