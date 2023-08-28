import React, { useState } from "react";
import NewInputNote from "./components/NewInputNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState(["Go shoppinf"]);

  const addNewNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  return (
    <div className="App">
      <NewInputNote addNewNote={addNewNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
