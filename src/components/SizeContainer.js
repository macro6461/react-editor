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
        mouseDown: false,
        currentDragger: null
    }

    checkMouseDown = (event) =>{
        if (event.target.id === 'viewDragger' 
        || event.target.id === 'leftDragger' 
        || event.target.id === 'rightDragger' ){
            this.onMouseChange(event)
        }
    }

    onMouseUp = () =>{
        this.setState({
            mouseDown: false,
            currentDragger: null
        })
    }

    onMouseChange = (event) => {
        this.setState({
            mouseDown: !this.state.mouseDown,
            currentDragger: event.target.id
        })
    }

    onMouseOut = () => {
        this.setState({
            mouseDown: false,
            currentDragger: null
        })
    }

    checkWhichDragger = (event) =>{
        if (this.state.mouseDown && this.state.currentDragger ){
            if (this.state.currentDragger === 'viewDragger'){
                this.onChangeHeight(event)
            } else if (this.state.currentDragger === 'leftDragger' || this.state.currentDragger === 'rightDragger') {
                var type = this.state.currentDragger.split("Dragger")[0]
                this.onWidthChange(event, type)
                // this[`${type}OnChange`](event)
            }
        } 
    }

    onChangeHeight = (event) => {
            
            var dy =  event.pageY - (this.state.topContainerHeight + 60);

            var viewHeight = this.state.viewHeight - dy

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

    onWidthChange = (event, y) =>{
        
        var topContainer = document.getElementById('container').children[0]

        var js = topContainer.children[1]
        var html = topContainer.children[0]
        var css = topContainer.children[2]
        var totalWidth = topContainer.offsetWidth

        this[`${y}OnChange`](event, js, html, css, totalWidth )

    }

    leftOnChange = (event, js, html, css, totalWidth) =>{

        var dX = js.offsetLeft - event.pageX;

        var jsWidthPx = js.offsetWidth + dX
        var htmlWidthPx = totalWidth - (jsWidthPx + css.offsetWidth)

        var htmlWidth =  Math.round(100*((htmlWidthPx / totalWidth) * 100))/100
        var jsWidth =  Math.round(100*((jsWidthPx / totalWidth) * 100))/100

        this.setState({
            htmlWidth, jsWidth
        })

    }

    rightOnChange = (event, js, html, css, totalWidth) =>{
        
        var dX = (js.offsetLeft + js.offsetWidth) - event.pageX;

        var jsWidthPx = js.offsetWidth - dX
        var cssWidthPx = totalWidth - (jsWidthPx + html.offsetWidth)

        var cssWidth =  Math.round(100*((cssWidthPx / totalWidth) * 100))/100
        var jsWidth =  Math.round(100*((jsWidthPx / totalWidth) * 100))/100

        this.setState({
            cssWidth, jsWidth
        })
    }

    render(){
        return(<div className='container' id="container"
        onMouseDown={this.checkMouseDown}  
        onMouseUp={this.onMouseUp} 
        onMouseMove={this.checkWhichDragger}
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

