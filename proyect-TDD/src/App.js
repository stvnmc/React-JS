import { useState } from "react";
import "./App.css";

function App() {
  const [busqueda, setBusqueda] = useState("");
  return (
    <div className="App">
      <h1>
        welcome to <span>RadioMusic</span>
      </h1>
      <input
        type="text"
        placeholder="write the name of the radio"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button>search</button>
      <section aria-label="list-stations"></section>
    </div>
  );
}

export default App;
