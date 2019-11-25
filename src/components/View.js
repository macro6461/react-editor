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
        if (this.props.html !== prevProps.html){
            this.setState({
                html: this.props.html
            })
        } 
    }

    render(){

        return (<div className="view" style={{height: this.props.height}}>
                <div className="vertical-dragger" 
                onMouseDown={this.props.onMouseDown} 
                onMouseUp={this.props.onMouseUp}
                onMouseMove={this.props.onChangeHeight}
                onMouseLeave={this.props.onMouseOut}
                />
                {ReactHtmlParser(this.state.html)}
        </div>)
    }
};


const mapStateToProps = (state) => {

    return {
      html: state.html
    }
  }
  
  
  export default withRouter(connect(mapStateToProps) (View))



