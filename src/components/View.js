import React, { useState, useEffect } from "react";
import './../App.css'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import Iframe from 'react-iframe'

const View = (props) => {

    const [compiled, setCompiled] = useState();

    useEffect(() => {
        setCompiled(props.compiled)
        var x = document.getElementById('viewIframe')
        var y = (x.contentWindow || x.contentDocument);
        if (y.document){
            y = y.document
        }
        document.getElementById('viewIframe').contentDocument.open()
        document.getElementById('viewIframe').contentDocument.close()
        document.getElementById('viewIframe').contentDocument.write(compiled)
    }, [props.compiled, compiled])

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



