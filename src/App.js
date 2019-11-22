import React from 'react';
import './App.css';
import JavaScript from './components/JavaScript.js'
import HTML from './components/HTML.js'
import CSS from './components/CSS.js'
import View from './components/View.js'

function App() {
  return (
    <div className="App">
    <h1>React Editor</h1>
      <div className='container'>
        <HTML/>
        <JavaScript/>
        <CSS/>
        <View/>
      </div>
    </div>
  );
}

export default App;
