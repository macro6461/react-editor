import React, { useState, useEffect } from "react";
import './../App.css'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import Iframe from 'react-iframe'

const View = (props) => {

    useEffect(() => {
        var x = document.getElementById('viewIframe')
        x.contentDocument.open()
        x.contentDocument.close()
        x.contentDocument.write(props.compiled)
    }, [props.compiled])

    var revealMask = props.mouseDown && props.currentDragger.includes('view')

    return (
        <div className="view" style={{height: props.height}} onMouseUp={props.onMouseUp}>
            <div className="vertical-dragger" 
                    id="viewDragger"
            />
            <div className="viewMask" style={{display: revealMask ? 'block' : 'none'}}/>
            <Iframe id="viewIframe" frameBorder="0" title='view'>
            </Iframe>
        </div>
    )
};


const mapStateToProps = (state) => {

    return {
      html: state.html,
      css: state.css,
      js: state.js,
      compiled: state.compiled
    }
  }
  
  
  export default withRouter(connect(mapStateToProps) (View))



