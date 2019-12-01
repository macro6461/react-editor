import React, {Component} from 'react'
import './../App.css'
import { addHtml } from '../actions'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

import TextArea from './TextArea.js';

class HTML extends Component{

    onChange = (html) => {
        this.props.addHtml(html)
    }

    render(){
        var transform = this.props.rotateHtml ? 'rotate(90deg)' : 'rotate(0deg)' 
        return (
            <div className="sectionContainer html" style={{width: this.props.width + '%'}}>
                <div className="innerSectionContainer">
                <div className='box-title-container'>
                <h2  className="box-title" style={{transform}}>HTML</h2>
                </div>
                <TextArea onChange={this.onChange} index={0}/>
                </div>
            </div>
        )
    }
};

export default withRouter(connect(null, {addHtml}) (HTML))