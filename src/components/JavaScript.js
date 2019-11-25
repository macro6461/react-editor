import React, {Component} from 'react'
import './../App.css'
import TextArea from './TextArea.js';

export default class JavaScript extends Component{
    state = {

    };

    onChange = (js) => {
        console.log(js)
    }

  render(){
      return (
          <div className="sectionContainer js" style={{width: this.props.width +'%'}}>
            <div className="innerSectionContainer">
            <div className="horizontal-dragger" id="leftDragger" style={{left: -5}}/>
                <h2  className="box-title">JavaScript</h2>
                <TextArea onChange={this.onChange}/>
            <div className="horizontal-dragger" id="rightDragger" style={{right: -5}}/>
            </div>
          </div>
      )
  }
};