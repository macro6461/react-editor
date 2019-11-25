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

    onMouseOut = () => {
        this.setState({
            mouseDown: false
        })
    }

    onChangeHeight = (event) => {
        if (this.state.mouseDown){
            
            var dy =  event.pageY - (this.state.topContainerHeight + 60);

            var viewHeight

            if (dy >= this.state.viewHeight){
                viewHeight = this.state.viewHeight + dy;
            } else {
                viewHeight = this.state.viewHeight - dy;
            } 

                if (viewHeight >= 550){
                    viewHeight = 550
                }
             
                var topContainerHeight = 600 - viewHeight

                if (topContainerHeight >= 540){
                    topContainerHeight = 540
                }

                if (topContainerHeight + viewHeight > 600 || topContainerHeight + viewHeight < 600){
                    viewHeight = 600 - topContainerHeight
                }

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
        return(<div className='container' onMouseUp={this.onMouseChange}>
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
            onChangeHeight={this.onChangeHeight}
            />
      </div>)
    }
}

