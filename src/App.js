import React, {Component} from 'react';
import './App.css';
import SizeContainer from './components/SizeContainer.js'
import Buttons from './components/Buttons.js'

class App extends Component{

  state = {
    isSizeStateChanged: false
  };

  onChangeSizeTrue = () => {
    debugger
    this.setState({
      isSizeStateChanged: true
    })
  };

  resetSize = () => {
    this.setState({
      isSizeStateChanged: false
    })
  };

  render(){
    return (
      <div className="App">
        <h1 style={{height: 40, marginBottom: 10}}>React Editor</h1>
        <Buttons 
        showReset={this.state.isSizeStateChanged}
        resetSize={this.resetSize}
        />
        <SizeContainer isSizeStateChanged={this.state.isSizeStateChanged} onChangeSizeTrue={this.onChangeSizeTrue}/>
      </div>
    );
  }
}

export default App;
