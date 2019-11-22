import React, {Component} from 'react'
import './../App.css'

import TextArea from './TextArea.js';

export default class HTML extends Component{
    state = {

    };

    render(){
        return (
            <div className="sectionContainer">
                <h2 class="box-title">HTML</h2>
                <TextArea/>
            </div>
        )
    }
};