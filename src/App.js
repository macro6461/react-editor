import React from 'react';
import './App.css';
import SizeContainer from './components/SizeContainer.js'

function App() {
  return (
    <div className="App">
    <h1 style={{height: 40, marginTop: 10, marginBottom: 10}}>React Editor</h1>
      <SizeContainer/>
    </div>
  );
}

export default App;
