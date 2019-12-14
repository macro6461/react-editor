import React from 'react';
import './App.css';
import SizeContainer from './components/SizeContainer.js'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

const App = (props) => {

    return (
      <div className={!props.mode ? "App" : 'night'}>
        <h1 style={{height: 50, marginBottom: 0, padding: 5}}>React Editor</h1>
        <SizeContainer mode={props.mode}/>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
      mode: state.mode
  };
}

export default withRouter(connect(mapStateToProps) (App))
