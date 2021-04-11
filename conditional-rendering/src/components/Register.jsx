import React from "react";
import Input from "./Input.jsx"
import Button from "./Button.jsx"

function Register() {
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
        Input type = "password"
        placeholder = "conform password" / >
        <
        Button name = "Register" / > < /
        form >
    );
}

export default Register;