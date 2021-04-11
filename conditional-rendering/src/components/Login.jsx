import React from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";


function Login() {
    return (

        <
        form className = "form" >
        <
        Input type = "text"
        placeholder = "username" / >
        <
        Input type = "password"
        placeholder = "password" / >
        <
        Button name = "Submit" / >
        <
        /form >
    );
}

export default Login;