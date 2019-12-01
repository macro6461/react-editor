import React, {Component} from 'react'
import './../App.css'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; 
import Iframe from 'react-iframe'
import { throwStatement } from '@babel/types';

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
    }

    componentDidUpdate = (prevProps, prevState) => {
        var update = this.props.html !== prevProps.html || this.props.css !== prevProps.css || this.props.js !== prevProps.js
        console.log(this.props.css)
        if (update){
            this.setState({
                html: this.props.html,
                css: this.props.css,
                js: this.props.js
            }, ()=>{
                var x = document.getElementById('viewIframe')
                var y = (x.contentWindow || x.contentDocument);
                if (y.document){
                    y = y.document
                }
                var contentStr = this.state.html + '<style>' + this.state.css + '</style>';
                document.getElementById('viewIframe').contentDocument.open()
                document.getElementById('viewIframe').contentDocument.close()
                document.getElementById('viewIframe').contentDocument.write(contentStr)
            })
        } 
    }

    render(){

        var revealMask = this.props.mouseDown && this.props.currentDragger.includes('view')

        return (<div className="view" style={{height: this.props.height}} onMouseUp={this.props.onMouseUp}>
        <div className="vertical-dragger" 
                id="viewDragger"
        />
        <div className="viewMask" style={{display: revealMask ? 'block' : 'none'}}/>
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



