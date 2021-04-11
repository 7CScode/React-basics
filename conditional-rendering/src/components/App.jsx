import React from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

var condition = true;

function App() {
    return ( <
        div className = "container" > { condition ? < Register / > : < Login / > } < /div>
    );
}

export default App;