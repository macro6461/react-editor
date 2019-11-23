export default function rootReducer(state={
    html: '',
    css: '',
    js: '',
}, action){
    switch(action.type){
      case "ADD_HTML":
      var html = action.payload
        return {...state, html}
      default:
        return state
    }
  }