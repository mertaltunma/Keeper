import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  function handleNote(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleNote}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button
          onClick={(event) => {
            event.preventDefault(); // so important when dealing with buttons inside the form
            props.addNote(newNote);
            setNewNote([{ title: "", content: "" }]);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
