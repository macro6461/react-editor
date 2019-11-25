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
        viewHeight: 325,
        topContainerHeight: 325,
        mouseDown: false,
        currentDragger: null,
        rotateJs: false,
        rotateHtml: false,
        rotateCss: false
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
            }
        } 
    }

    onChangeHeight = (event) => {
            
            var dy =  event.pageY - (this.state.topContainerHeight + 60);

            var viewHeight = this.state.viewHeight - dy

                if (viewHeight >= 550){
                    viewHeight = 550
                }
             
                var topContainerHeight = 650 - viewHeight

                if (topContainerHeight >= 625){
                    topContainerHeight = 625
                }

                if (topContainerHeight + viewHeight > 650 || topContainerHeight + viewHeight < 650){
                    viewHeight = 650 - topContainerHeight
                }

            this.setState({
                viewHeight,
                topContainerHeight
            })
    }

    rotate = (type, x) =>{
        var key = 'rotate' + type
        if (this.state[key] !== x){
            var obj = {}
            obj[key] = x
            this.setState(obj)
        }
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

        if (jsWidthPx < 40){
            var diff = 40 - jsWidthPx;
            this.rotate('Js', true)
            jsWidthPx = 40;
            htmlWidthPx = htmlWidthPx - diff;
        } else {
            this.rotate('Js', false)
        }

        if (htmlWidthPx < 40){
            this.rotate('Html', true)
            var diff = 40 - htmlWidthPx;
            htmlWidthPx = 40;
            jsWidthPx = jsWidthPx - diff;
        } else {
            this.rotate('Html', false)
        }

        var htmlWidth =  Math.round(100*((htmlWidthPx / totalWidth) * 100))/100
        var jsWidth =  Math.round(100*((jsWidthPx / totalWidth) * 100))/100

        this.setState({
            htmlWidth, jsWidth
        })

    }

    rightOnChange = (event, js, html, css, totalWidth) =>{
        
        var dX = (js.offsetLeft + js.offsetWidth) - event.pageX;

        var jsWidthPx = (js.offsetWidth - dX) + 10
        var cssWidthPx = (totalWidth - (jsWidthPx + html.offsetWidth))  + 10

        if (jsWidthPx < 40){
            this.rotate('Js', true)
            var diff = 40 - jsWidthPx;
            jsWidthPx = 40;
            cssWidthPx = cssWidthPx - diff;
        } else {
            this.rotate('Js', false)
        }

        if (cssWidthPx < 40){
            this.rotate('Css', true)
            var diff = 40 - cssWidthPx;
            cssWidthPx = 40;
            jsWidthPx = jsWidthPx - diff;
        } else {
            this.rotate('Css', false)
        }

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
                <HTML width={this.state.htmlWidth} rotateHtml={this.state.rotateHtml}/>
                <JavaScript width={this.state.jsWidth} rotateJs={this.state.rotateJs}/>
                <CSS width={this.state.cssWidth} rotateCss={this.state.rotateCss}/>
            </div>
            <View height={this.state.viewHeight} 
            />
      </div>)
    }
}

