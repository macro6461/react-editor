import React, {Component} from 'react';
import JavaScript from './JavaScript.js'
import HTML from './HTML.js'
import CSS from './CSS.js'
import View from './View.js'

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
        rotateCss: false,
        stateChanged: false
    }

    checkMouseDown = (event) =>{
        if (event.target.id === 'viewDragger' 
        || event.target.id === 'leftDragger' 
        || event.target.id === 'rightDragger' ){
            this.onMouseChange(event)
        }
    };

    onMouseUp = () =>{
        this.setState({
            mouseDown: false,
            currentDragger: null
        })
    };

    onMouseChange = (event) => {
        this.setState({
            mouseDown: !this.state.mouseDown,
            currentDragger: event.target.id
        })
    };

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
    };

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
    };

    rotate = (type, x) => {
        if (x === true && type === 'Css'){debugger}
        var key = 'rotate' + type;
        if (this.state[key] !== x) {
            var obj = {};
            obj[key] = x;
            this.setState(obj);
        }
    };

    onWidthChange = (event, y) => {
        
        var topContainer = document.getElementById('container').children[0];

        var js = topContainer.children[1];
        var html = topContainer.children[0];
        var css = topContainer.children[2];
        var totalWidth = topContainer.offsetWidth;

        this.onDragChange(event, js, html, css, totalWidth, y);

    };

    onDragChange = (event, js, html, css, totalWidth, type) => {

        var dX = type === 'left' ? js.offsetLeft - event.pageX : (js.offsetLeft + js.offsetWidth) - event.pageX;

        var jsWidthPx = type === 'left' ? js.offsetWidth + dX : js.offsetWidth - dX;

        var cssWidth, htmlWidth, diff;

        var paramPx = type === 'left' ? totalWidth - (jsWidthPx + css.offsetWidth) : totalWidth - (jsWidthPx + html.offsetWidth);

        var arg = type === 'left' ? 'Html' : 'Css';

        if (paramPx < 40){
            this.rotate(arg, true)
        } else {

            this.rotate(arg, false);

            // var func = type === 'left' ? this.adjustRight :  this.adjustLeft;

            var isAdjusting = false;

            if (jsWidthPx < 40){
                diff = 40 - jsWidthPx;
                this.rotate('Js', true);
                jsWidthPx = 40;
                paramPx = paramPx - diff;
                isAdjusting = true;
                this.adjustWidthIfNeeded(diff, paramPx, jsWidthPx, totalWidth, type);
            } else {
                this.rotate('Js', false)
            }

            var jsWidth =  Math.round(100*((jsWidthPx / totalWidth) * 100))/100;

            if (type === "left"){
                cssWidth = this.state.cssWidth;
                htmlWidth = Math.round(100*((paramPx / totalWidth) * 100))/100;
                this.checkAdjusting(type, isAdjusting, cssWidth, jsWidth, htmlWidth );
            } else {
                htmlWidth = this.state.htmlWidth;
                cssWidth = Math.round(100*((paramPx / totalWidth) * 100))/100;
                this.checkAdjusting(type, isAdjusting, cssWidth, jsWidth, htmlWidth );
            }

        }
    };
    

    checkAdjusting = (x, y, cssWidth, jsWidth, htmlWidth)=> {
        if ((y && x === 'left') || (y && x === 'right') ){
            this.setState({
                jsWidth
            })
        } else {
            this.setState({
                cssWidth, jsWidth, htmlWidth
            })
        }
    };

    adjustWidthIfNeeded = (diff, paramPx, jsWidthPx, totalWidth, type) => {

        var newParamPx = totalWidth - (jsWidthPx + paramPx) - diff;

        if (newParamPx < 40 && type === 'right') {
            this.rotate('Html', true);
            newParamPx = 40;
        } else if (newParamPx < 40 && type === 'left') {
            debugger
            this.rotate('Css', true)
            newParamPx = 40;
        }

        var dynamicWidth = Math.round(100*((paramPx / totalWidth) * 100))/100;
        var newDynWidth = Math.round(100*((newParamPx / totalWidth) * 100))/100;
        var jsWidth =  Math.round(100*((jsWidthPx / totalWidth) * 100))/100;

        diff = Math.round(((99.99-(dynamicWidth+jsWidth+newDynWidth)) * 100))/100;

        if (diff !== 0 || diff !== -0 ){
            dynamicWidth+=diff
        }

        var cssWidth = type === 'right' ? dynamicWidth : newDynWidth;
        var htmlWidth = type === 'right' ? newDynWidth : dynamicWidth;

        this.setState({cssWidth, htmlWidth})

    }

    resetState = () =>{
        this.setState({
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
        })   
    };

    render(){

        var allSame = this.state.htmlWidth === this.state.cssWidth && this.state.htmlWidth === this.state.jsWidth && this.state.htmlWidth === 33.33;

        var showButton = this.state.viewHeight !== this.state.topContainerHeight || !allSame;

        return(
            <div>
                <div className='container' id="container"
                    onMouseDown={this.checkMouseDown}
                    onMouseUp={this.onMouseUp}
                    onMouseMove={this.checkWhichDragger}
                    onMouseLeave={this.onMouseOut}
                >
                    <div className='topContainer'
                        style={{ height: this.state.topContainerHeight }}
                    >
                        <HTML width={this.state.htmlWidth} rotateHtml={this.state.rotateHtml} />
                        <JavaScript width={this.state.jsWidth} rotateJs={this.state.rotateJs} />
                        <CSS width={this.state.cssWidth} rotateCss={this.state.rotateCss} />
                    </div>
                    <View height={this.state.viewHeight}
                    />
                </div>
                {showButton
                    ? <button onClick={this.resetState} style={{marginTop: 10}}>Reset</button>
                    : null
                }
                  
            </div>)
    }
}

