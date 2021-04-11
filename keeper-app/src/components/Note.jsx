import React from "react";


function Note(props) {
    return ( <
        div >
        <
        div class = "note" >
        <
        h1 >{props.heading}</h1>
        <
        p >
        {props.dis} <
        /p> <
        /div><
        /div>
    );
}

export default Note;
