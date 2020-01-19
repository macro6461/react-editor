import {compile, validateHtml} from '../util/util.js';

export default function rootReducer(state={
    html: '',
    css: '',
    js: '',
    compiled: '',
    isRunning: false,
    mode: false
}, action){
    switch(action.type){
      case "ADD_HTML":
        var html = action.payload
        // if (validateHtml(html)){
          var compiled = compile(html, state.css)
          return {...state, html, compiled}
        // }  else {
        //   return {...state}
        // }
      case "ADD_CSS":
        var css = action.payload
        var compiled = compile(state.html, css)
        return {...state, css, compiled}
      case "ADD_JS":
        var js = action.payload
        var compiled = compile(state.html, state.css, js)
        return {...state, js: js, compiled}
      case "CHANGE_MODE":
        var mode = !state.mode
        return {...state, mode}
      case "SET_IS_RUNNING":
        return {...state, isRunning: action.payload}
      default:
        return state
    }
  }