import { useState } from "react";
import "./App.css";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [list, setList] = useState("");

  const DoSearch = () => {
    const url = `https://fr1.api.radio-browser.info/json/stations/byname/${busqueda}`;
    axios
      .get(url)
      .then((r) => setList(r.data))
      .catch((e) => console.log(e));
  };
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
      <section aria-label="list-stations">
        {list.map((station, i) => (
          <div key={i}>{station.name}</div>
        ))}
      </section>
    </div>
  );
}

export default App;
