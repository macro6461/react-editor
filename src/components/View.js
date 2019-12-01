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
                var x = document.querySelector('iframe');
                var y = (x.contentWindow || x.contentDocument);
                if (y.document){
                    y = y.document
                }
           
                document.querySelector('iframe').contentDocument.open()
                document.querySelector('iframe').contentDocument.close()

                document.querySelector('iframe').contentDocument.write(this.state.html)
            })
        } 
    }

    render(){

        return (<div className="view" style={{height: this.props.height}}>
         <div className="vertical-dragger" 
                id="viewDragger"
                />
                <Iframe id="viewIframe" frameBorder="0" title='view' style={{zIndex: -100}}>
                </Iframe>
                {/* {ReactHtmlParser(this.state.html)} */}
        </div>)
    }
};


const mapStateToProps = (state) => {

    return {
      html: state.html
    }
  }
  
  
  export default withRouter(connect(mapStateToProps) (View))



