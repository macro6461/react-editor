import React, {Component} from 'react';
import './App.css';
import SizeContainer from './components/SizeContainer.js'
import Buttons from './components/Buttons.js'

const App = () => {

    return (
      <div className="App">
        <h1 style={{height: 40, marginBottom: 10}}>React Editor</h1>
        <SizeContainer/>
      </div>
    );
    }

export default App;
