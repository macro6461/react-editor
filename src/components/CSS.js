import React, {Component} from 'react'
import './../App.css'

import TextArea from './TextArea.js';

export default class CSS extends Component{
    state = {
        
    };

    onChange = (css) => {
        console.log(css)
    }


    render() {

        var transform = this.props.rotateCss ? 'rotate(90deg)' : 'rotate(0deg)' 

        return (
            <div className="sectionContainer css" style={{width: this.props.width +'%'}}> 
                <div className="innerSectionContainer">
                <div className='box-title-container'>
                <h2  className="box-title" style={{transform}}>CSS</h2>
                </div>
                <TextArea onChange={this.onChange}/>
                </div>
            </div>
        )
    }
};