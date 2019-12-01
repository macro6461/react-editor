export function addHtml(data){
    return {
      type: "ADD_HTML",
      payload: data
    }
}

export function addCss(data){
  return {
    type: "ADD_CSS",
    payload: data
  }
}

export function changeMode(){
  return {
    type: "CHANGE_MODE"
  }
}