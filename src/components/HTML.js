import React, {Component} from 'react'
import './../App.css'
import { addHtml } from '../actions'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

import TextArea from './TextArea.js';

class HTML extends Component{

    onChange = (event) => {
        debugger
        var html = event.target.value
        this.props.addHtml(html)
    }

    render(){
        return (
            <div className="sectionContainer">
                <h2 class="box-title">HTML</h2>
                <TextArea onChange={this.onChange}/>
            </div>
        )
    }
};

export default withRouter(connect(null, {addHtml}) (HTML))