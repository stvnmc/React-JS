import React, { useState } from "react";
import newInpurNote from "./components/NewInputNote";

function App() {
  const [notes, setNotes] = useState(["Go shoppinf"]);

  const addNewNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  return (
    <div className="App">
      <input />
    </div>
  );
}

export default App;
