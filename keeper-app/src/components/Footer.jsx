import React from "react";
import ReactDom from "react-dom";

const date = new Date();
const year = date.getFullYear();

function Footer()
{
    return (
       <div> 
        <p>Copyright {year}</p> 
        </div>
    );
}

export default Footer;
