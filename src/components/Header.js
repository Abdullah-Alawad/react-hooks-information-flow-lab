import React, { useState } from "react";

function Header({onChangeColor, switchColor}){
    // function onDarkModeClick(){
    //     onChangeColor;
    // }

    return(
    <header>
            <h2>Shopster</h2>
        <button onClick={onChangeColor}>
            {switchColor} Mode
        </button>
    </header>
    )
}

export default Header;
