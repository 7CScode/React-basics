import React, { useState } from "react";

function CreateArea(props) {
  const [inputContent, changeContent] = useState({
    title: "",
    content: ""
  });

  function Inputfn(event) {
    const { name, value } = event.target;
    changeContent((prevValues) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValues.content
        };
      } else if (name === "content") {
        return {
          title: prevValues.title,
          content: value
        };
      }
    });
  }

  function submitNote(event) {
    props.onAdd(inputContent);
    changeContent({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={Inputfn}
          name="title"
          placeholder="Title"
          value={inputContent.title}
        />
        <textarea
          onChange={Inputfn}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputContent.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
