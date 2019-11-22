import React, {Component} from 'react'
import './../App.css'

const TextArea = (props) =>{
        return (<textarea className="innerBox" onChange={props.onChange}>
        </textarea>);
};

export default TextArea;