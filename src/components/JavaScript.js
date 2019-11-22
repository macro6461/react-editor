import React, {Component} from 'react'
import './../App.css'
import TextArea from './TextArea.js';

export default class JavaScript extends Component{
    state = {

    };

  render(){
      return (
          <div className="sectionContainer">
              <h2  class="box-title">JavaScript</h2>
             <TextArea/>
          </div>
      )
  }
};