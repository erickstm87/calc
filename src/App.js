import React, { Component } from 'react';
import './App.css';
// import Button from './components/Button';
import NumberBoard from './components/NumberBoard';
import Input from './components/Input';
import { Clear } from './components/Clear';

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <div className='calc-wrapper'>
            <Input />
            <NumberBoard />
            <div className='row'><Clear>Clear</Clear></div>
        </div>
      </div>
    );
  }
}

export default App;
