import React from "react";
import emojipedia from "../emojipedia.js"
import Entry from "./Entry.jsx"


function CreateEntry(contact){
    return(
        <Entry
        key={contact.id} 
        image={contact.emoji} 
        heading={contact.name} 
        dis={contact.meaning}
        />
    );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
   
      {emojipedia.map(CreateEntry)}

      </dl>
    </div>
  );
}

export default App;
