import React, {Component} from 'react';
import JavaScript from './JavaScript.js'
import HTML from './HTML.js'
import CSS from './CSS.js'
import View from './View.js'
import { EventEmitter } from 'events';

export default class SizeContainer extends Component {
    state ={
        htmlWidth: 33.33,
        cssWidth: 33.33,
        jsWidth: 33.33,
        viewHeight: 300,
        topContainerHeight: 300,
        mouseDown: false
    }

    onMouseChange = (event) => {
        this.setState({
            mouseDown: !this.state.mouseDown
        })
    }

    onChangeHeight = (event) => {
        if (this.state.mouseDown){
            var viewHeight = event.target.parentElement.getBoundingClientRect().height 
            + (event.clientX - event.target.parentElement.getBoundingClientRect().height)
           
            var topContainerHeight = 600 - viewHeight 
            this.setState({
                viewHeight,
                topContainerHeight
            })
        }
    }

    onChangeWidth = (x) => {
        debugger
    }

    render(){
        return(<div className='container'>
            <div className='topContainer' 
            style={{height: this.state.topContainerHeight}}
            >
                <HTML width={this.state.htmlWidth}/>
                <JavaScript width={this.state.jsWidth}/>
                <CSS width={this.state.cssWidth}/>
            </div>
            <View height={this.state.viewHeight} 
            onMouseDown={this.onMouseChange} 
            onMouseUp={this.onMouseChange} 
            onChangeHeight={this.onChangeHeight}/>
      </div>)
    }
}

