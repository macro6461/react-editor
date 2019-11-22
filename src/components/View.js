import React, {Component} from 'react'
import './../App.css'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; 

class View extends Component{

    state = {
        html: ''
    }

    componentDidMount = () =>{
        this.setState({
            html: this.props.html
        })
    }

    componentDidUpdate = (prevProps, prevState) =>{
        if (this.props.html !==prevProps.html){
            this.setState({
                html: this.props.html
            })
        }
    }

    render(){
        debugger
        return (<div className="view">
                {ReactHtmlParser(this.state.html)}
        </div>)
    }
};


const mapStateToProps = (state) => {

    debugger

    return {
      html: state.html
    }
  }
  
  
  export default withRouter(connect(mapStateToProps) (View))



