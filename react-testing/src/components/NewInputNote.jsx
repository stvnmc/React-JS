import React, { useState } from "react";

const NewInputNote = ({ addNewNote }) => {
  const [newNote, setNewNote] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="introduce new note"
          value={newNote}
          onKeyDown={(e) => e.key === "Enter" && addNewNote(newNote)}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={() => addNewNote(newNote)}>ADD</button>
      </div>
    </div>
  );
};

export default NewInputNote;
