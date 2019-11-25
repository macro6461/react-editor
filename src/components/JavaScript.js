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

    var transform = this.props.rotateJs ? 'rotate(90deg)' : 'rotate(0deg)' 
    
      return (
          <div className="sectionContainer js" style={{width: this.props.width +'%'}}>
            <div className="innerSectionContainer">
            <div className="horizontal-dragger" id="leftDragger" style={{left: -5}}/>
               
                <div className='box-title-container'>
                    <h2  className="box-title" style={{transform}}>JS</h2>
                </div>
                
                <TextArea onChange={this.onChange}/>
            <div className="horizontal-dragger" id="rightDragger" style={{right: -5}}/>
            </div>
          </div>
      )
  }
};