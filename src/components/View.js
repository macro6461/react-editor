import React, { useEffect, useRef } from "react";
import './../App.css'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import { setIsRunning } from '../actions'
import Iframe from 'react-iframe'

const View = (props) => {

    const {js, compiled} = props
    const prevAmount = usePrevious({js});

    useEffect(() => {
        var x = document.getElementById('viewIframe')
        if (prevAmount && prevAmount.js !== js) {
            x.contentWindow.location.reload();
            withTimeout(x)
        } else {
            refreshIframe(x)
        }
    }, [compiled, js])

    const refreshIframe = (x) => {
        x.contentDocument.open()
        x.contentDocument.close()
        x.contentDocument.write(compiled)
    }

    const withTimeout = (x) =>{
        props.setIsRunning(true);
        setTimeout(()=>{
            props.setIsRunning(false)
            refreshIframe(x)
        }, 1000)
    };

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

const usePrevious = (js) => {

    const ref = useRef();
    
    useEffect(() => {
      ref.current = js;
    }, [js]); 
    
    return ref.current;
  }


const mapStateToProps = (state) => {

    return {
      js: state.js,
      compiled: state.compiled,
      isRunning: state.isRunning
    }

  }
  
  
  export default withRouter(connect(mapStateToProps, {setIsRunning}) (View))
