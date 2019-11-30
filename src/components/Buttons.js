import React, {Component} from 'react';
import { FaGripHorizontal, FaFileCode, FaLightbulb, FaGripLinesVertical } from "react-icons/fa";
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { changeMode } from './../actions'

class Buttons extends Component {

    state = {
        isWindowSmall: false,
        right: null
    }

    componentDidMount = () =>{
        this.updateSmall()
        window.addEventListener("resize", this.updateSmall);
    }

    updateSmall = () =>{
        if (window.innerWidth <= 1024) {
            if (this.state.right === null){
                this.setState({
                    right: -60
                })
            }
            
            this.setState({
                isWindowSmall: true,
            })
        } else {
            this.setState({
                isWindowSmall: false,
                right: null
            })
        }
    }

    changeRight = () =>{
        if (window.innerWidth <= 1024) {
            if (this.state.right === -1) {
                this.setState({
                    right: -60,
                })
            } else {
                this.setState({
                    right: -1,
                })
            }
        }
    }

    render(){

        var {showReset, resetSize, mode, changeMode} = this.props;

             return(
            <div className='buttonsContainer' style={{right: this.state.right}}>
            <div className='buttonsContainerTab' onClick={this.changeRight}>
                <FaGripLinesVertical style={{color: 'cadetBlue', fontSize: 20}}/>
                <span className="tooltiptext">{this.state.right === -60 ? "Show Options" : "Hide Options"}</span>
            </div>
            <div>
            <div className='buttons' onClick={changeMode}>
                <FaLightbulb/>
                <span className="tooltiptext">{mode ? "Day Mode" : "Night Mode"}</span>
            </div>
            <div className='buttons' onClick={resetSize}>
                <FaFileCode/>
                <span className="tooltiptext">Download Code</span>
            </div>
            {showReset
                ? <div className='buttons' onClick={resetSize}>
                <FaGripHorizontal/>
                <span className="tooltiptext">Reset Panes</span>
                </div>
                : null
            }
            </div>
            </div>
            )
    }
};

export default withRouter(connect(null, {changeMode}) (Buttons))