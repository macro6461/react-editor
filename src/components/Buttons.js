import React, {Component} from 'react';
import { FaGripHorizontal, FaFileCode, FaLightbulb, FaGripLinesVertical } from "react-icons/fa";

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

        var {showReset, resetSize} = this.props;

             return(
            <div className='buttonsContainer' style={{right: this.state.right}}>
            <div className='buttonsContainerTab' onClick={this.changeRight}>
                <FaGripLinesVertical style={{color: 'cadetBlue', fontSize: 20}}/>
                <span class="tooltiptext">{this.state.right === -60 ? "Show Options" : "Hide Options"}</span>
            </div>
            <div>
            <div className='buttons' onClick={resetSize}>
                <FaFileCode/>
                <span class="tooltiptext">Download Code</span>
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

export default Buttons;