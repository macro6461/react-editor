export function addHtml(data){
    return {
      type: "ADD_HTML",
      payload: data
    }
}
export function changeMode(){
  return {
    type: "CHANGE_MODE"
  }
}