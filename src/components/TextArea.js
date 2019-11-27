import React from 'react'
import "antd/dist/antd.css";
import './../App.css'

const Textarea = (props) => {

        const checkTab = (event) =>{
                HTMLTextAreaElement.prototype.getCaretPosition = function () { //return the caret position of the textarea
                        return this.selectionStart;
                    };
                    HTMLTextAreaElement.prototype.setCaretPosition = function (position) { //change the caret position of the textarea
                        this.selectionStart = position;
                        this.selectionEnd = position;
                        this.focus();
                    };
                    HTMLTextAreaElement.prototype.hasSelection = function () { //if the textarea has selection then return true
                        if (this.selectionStart === this.selectionEnd) {
                            return false;
                        } else {
                            return true;
                        }
                    };
                    HTMLTextAreaElement.prototype.getSelectedText = function () { //return the selection text
                        return this.value.substring(this.selectionStart, this.selectionEnd);
                    };
                    HTMLTextAreaElement.prototype.setSelection = function (start, end) { //change the selection area of the textarea
                        this.selectionStart = start;
                        this.selectionEnd = end;
                        this.focus();
                    };
                    
                    var textarea = document.getElementsByTagName('textarea')[0];

                    var newCaretPosition
                    
                    textarea.onkeydown = function(event) {
                        
                        //support tab on textarea
                        if (event.keyCode === 9) { //tab was pressed
                            newCaretPosition = textarea.getCaretPosition() + "    ".length;
                            textarea.value = textarea.value.substring(0, textarea.getCaretPosition()) + "    " + textarea.value.substring(textarea.getCaretPosition(), textarea.value.length);
                            textarea.setCaretPosition(newCaretPosition);
                            return false;
                        }
                        if(event.keyCode === 8){ //backspace
                            if (textarea.value.substring(textarea.getCaretPosition() - 4, textarea.getCaretPosition()) === "    ") { //it's a tab space
                                newCaretPosition = textarea.getCaretPosition() - 3;
                                textarea.value = textarea.value.substring(0, textarea.getCaretPosition() - 3) + textarea.value.substring(textarea.getCaretPosition(), textarea.value.length);
                                textarea.setCaretPosition(newCaretPosition);
                            }
                        }
                        if(event.keyCode === 37){ //left arrow
                            if (textarea.value.substring(textarea.getCaretPosition() - 4, textarea.getCaretPosition()) === "    ") { //it's a tab space
                                newCaretPosition = textarea.getCaretPosition() - 3;
                                textarea.setCaretPosition(newCaretPosition);
                            }    
                        }
                        if(event.keyCode === 39){ //right arrow
                            if (textarea.value.substring(textarea.getCaretPosition() + 4, textarea.getCaretPosition()) === "    ") { //it's a tab space
                                newCaretPosition = textarea.getCaretPosition() + 3;
                                textarea.setCaretPosition(newCaretPosition);
                            }
                        } 
                    };
                    props.onChange(textarea.value)
        };


        return (<div className="innerBox"><textarea onChange={checkTab} style={{width: props.width + '%'}} >
        </textarea></div>);
};

export default Textarea;