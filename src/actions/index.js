export function addHtml(data){
    return {
      type: "ADD_HTML",
      payload: data
    };
}

export function addCss(data){
    return {
      type: "ADD_CSS",
      payload: data
    };
}

export function addJs(data){
  return {
    type: "ADD_JS",
    payload: data
  }
}

export function changeMode(){
  return {
    type: "CHANGE_MODE"
  }
}

export function setIsRunning(bool){
  return {
    type: "SET_IS_RUNNING",
    payload: bool
  }
}