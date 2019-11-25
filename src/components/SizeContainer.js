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

    checkMouseDown = (event) =>{
        if (event.target.id === 'viewDragger'){
            this.onMouseChange(event)
        }
    }

    onMouseUp = () =>{
        this.setState({
            mouseDown: false
        })
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

            if (event.mousemoveY >= 0){
                viewHeight = this.state.viewHeight + dy;
            } else {
                viewHeight = this.state.viewHeight - dy;
            } 

            console.log(event.mousemoveY >= 0)

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
        
    }

    render(){
        return(<div className='container' 
        onMouseDown={this.checkMouseDown}  
        onMouseUp={this.onMouseUp} 
        onMouseMove={this.onChangeHeight}
        onMouseLeave={this.onMouseOut}
        >
            <div className='topContainer' 
            style={{height: this.state.topContainerHeight}}
            >
                <HTML width={this.state.htmlWidth}/>
                <JavaScript width={this.state.jsWidth}/>
                <CSS width={this.state.cssWidth}/>
            </div>
            <View height={this.state.viewHeight} 
            />
      </div>)
    }
}

