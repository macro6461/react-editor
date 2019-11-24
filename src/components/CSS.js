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
        return (
            <div className="sectionContainer css" style={{width: this.props.width +'%'}}> 
                <div className="innerSectionContainer">
                <h2  className="box-title">CSS</h2>
                <TextArea onChange={this.onChange}/>
                </div>
            </div>
        )
    }
};