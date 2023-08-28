import React from "react";

const NoteList = ({ notes }) => {
  return (
    <div aria-label="list">
      {notes.map((notes, i) => (
        <div key={i}>{notes}</div>
      ))}
    </div>
  );
};

export default NoteList;
