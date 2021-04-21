import React from "react";

function Button(props) {
    
    const [mouseovercolor,newcolor] = React.useState(false);

    function mouseover(){
        newcolor(true);
    }

    function mouseout(){
        newcolor(false);
    }


    return ( < button type = "submit" style ={{backgroundColor: mouseovercolor ? "black" : "white" }} onMouseOver={mouseover} onMouseOut={mouseout} > { props.name } < /button> );
    }

    export default Button;