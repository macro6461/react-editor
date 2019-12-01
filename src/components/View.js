import React, {Component} from 'react'
import './../App.css'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; 
import Iframe from 'react-iframe'

class View extends Component{

    state = {
        html: '',
        css: '',
        js: ''
    }

    componentDidMount = () =>{
        this.setState({
            html: this.props.html,
            css: this.props.css,
            js: this.props.js
        })
        // document.querySelector('iframe').contentDocument.write(this.state.html)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.html !== prevProps.html){
            this.setState({
                html: this.props.html
            }, ()=>{
                var x = document.getElementById('viewIframe')
                var y = (x.contentWindow || x.contentDocument);
                if (y.document){
                    y = y.document
                }
                document.getElementById('viewIframe').contentDocument.open()
                document.getElementById('viewIframe').contentDocument.close()
                document.getElementById('viewIframe').contentDocument.write(this.state.html)
            })
        } 
    }

    render(){

        return (<div className="view" style={{height: this.props.height}} onMouseUp={this.props.onMouseUp}>
        <div className="vertical-dragger" 
                id="viewDragger"
        />
        <div className="viewMask" style={{display: this.props.mouseDown ? 'block' : 'none'}}/>
                <Iframe id="viewIframe" frameBorder="0" title='view'>
                </Iframe>
        </div>)
    }
};


const mapStateToProps = (state) => {

    return {
      html: state.html,
      css: state.css,
      js: state.js
    }
  }
  
  
  export default withRouter(connect(mapStateToProps) (View))



