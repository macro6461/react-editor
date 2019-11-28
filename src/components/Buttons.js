import React from 'react';
import { FaGripHorizontal, FaFileCode } from "react-icons/fa";

const Buttons = (props) =>{

    var {showReset, resetSize} = props;

    return(
    <div className='buttonsContainer'>
    <div className='buttons' onClick={resetSize}>
        <FaFileCode/>
        <span class="tooltiptext">Download Code</span>
    </div>
    {showReset
        ? <div className='buttons' onClick={resetSize}><FaGripHorizontal/></div>
        : null
    }
    </div>
    )
};

export default Buttons;