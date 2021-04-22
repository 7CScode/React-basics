import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputContent) {
    setItems((prevValues) => {
      return [...prevValues, inputContent];
    });
  }

  function deleteChange(id) {
    setItems((prevValues) => {
      return prevValues.filter((elements, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((arrayItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={arrayItem.title}
            content={arrayItem.content}
            onDelete={deleteChange}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
