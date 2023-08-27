import React from "react";

const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.map((notes, i) => (
        <li key={i}>{notes}</li>
      ))}
    </div>
  );
};

export default NoteList;
