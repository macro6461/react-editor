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
        viewHeight: 300,
        topContainerHeight: 300
    }

    onChangeHeight = (x) =>{

    }

    render(){
        return(<div className='container'>
            <div className='topContainer' style={{height: this.state.topContainerHeight}}>
                <HTML width={this.state.htmlWidth}/>
                <JavaScript width={this.state.jsWidth}/>
                <CSS width={this.state.cssWidth}/>
            </div>
            <View width={this.state.viewWidth}/>
      </div>)
    }
}

