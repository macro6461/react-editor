import React from 'react'
import './../App.css'
import { addCss} from '../actions'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

import TextArea from './TextArea.js';

const CSS = (props) => {

    const onChange = (css) => {
        props.addCss(css)
    }

    var transform = props.rotateCss ? 'rotate(90deg)' : 'rotate(0deg)' 

        return (
            <div className="sectionContainer css" style={{width: props.width +'%'}}> 
                <div className="innerSectionContainer">
                <div className='box-title-container'>
                <h2  className="box-title" style={{transform}}>CSS</h2>
                </div>
                <TextArea onChange={onChange} index={2}/>
                </div>
            </div>
        )
};

export default withRouter(connect(null, {addCss}) (CSS))