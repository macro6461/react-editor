import React, {Component} from 'react'
import './../App.css'

import TextArea from './TextArea.js';

export default class CSS extends Component{
    state = {

    };

    render() {
        return (
            <div className="sectionContainer css">
                <div>
                <h2  className="box-title">CSS</h2>
                <TextArea/>
                </div>
            </div>
        )
    }
};