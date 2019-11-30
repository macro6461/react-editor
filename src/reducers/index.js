export default function rootReducer(state={
    html: '',
    css: '',
    js: '',
    mode: false
}, action){
    switch(action.type){
      case "ADD_HTML":
      var html = action.payload
        return {...state, html}
      case "CHANGE_MODE":
      var mode = !state.mode
        return {...state, mode}
      default:
        return state
    }
  }