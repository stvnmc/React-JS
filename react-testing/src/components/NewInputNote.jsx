
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
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button>ADD</button>
      </div>
    </div>
  );
};

export default NewInputNote;
