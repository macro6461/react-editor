import React, { useState } from "react";
import './../App.css'
import TextArea from './TextArea.js';
import { addJs} from '../actions'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

const JavaScript = (props) =>{

  const [js, setJs] = useState();

  const onChange = (js) =>{
    setJs(js)
  }

  const onSubmit = () => {
    props.addJs(js)
  }
  
    var transform = props.rotateJs ? 'rotate(90deg)' : 'rotate(0deg)' 
    
      return (
          <div className="sectionContainer js" style={{width: props.width +'%'}}>
            <div className="innerSectionContainer">
            <div className="horizontal-dragger" id="leftDragger" style={{left: -5}}/>
              
                <div className='box-title-container'>
                    <h2  className="box-title" style={{transform}}>JS</h2>
                </div>
                
                <TextArea onChange={onChange} index={1}/>
            <div className="horizontal-dragger" id="rightDragger" style={{right: -5}}/>
            </div>
            {js 
              ? <div onClick={onSubmit} style={{
                position: 'absolute', 
                right: 20, 
                bottom: 10, border: 'solid 1px cadetblue', backgroundColor: 'white', paddingLeft: 5, paddingRight: 5}}>Run</div>
              : null
            }
          </div>
      )
};

export default withRouter(connect(null, {addJs}) (JavaScript))