import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Notes from "./Notes.jsx";
import Note from "./Note.jsx";


function CreateNotes(contact){
    return(
        <Note
        id={contact.key}
        heading={contact.title}
        dis={contact.content}
        />
    );
}



function App() {
    return (
        <div>
        <header>
        <h1><Header /></h1>
        </header>
        <div>{Notes.map(CreateNotes)}</div>
        <footer><Footer /></footer>
        </div>
    );
}

export default App;
