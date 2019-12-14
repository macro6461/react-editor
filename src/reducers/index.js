import {compile} from '../util/util.js';

export default function rootReducer(state={
    html: '',
    css: '',
    js: '',
    compiled: '',
    mode: false
}, action){
    switch(action.type){
      case "ADD_HTML":
        var html = action.payload
        var compiled = compile(html, state.css)
        return {...state, html, compiled}
      case "ADD_CSS":
        var css = action.payload
        var compiled = compile(state.html, css)
        return {...state, css, compiled}
      case "ADD_JS":
        var js = action.payload
        return {...state, js}
      case "CHANGE_MODE":
        var mode = !state.mode
        return {...state, mode}
      default:
        return state
    }
  }