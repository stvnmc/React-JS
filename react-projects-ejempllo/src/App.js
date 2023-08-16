import "./App.css";
import EjemploUseMemo from "./Components/EJemploMemo";
import EjemploUseBoolean from "./Components/EjemploUseBollean";
import TaskList from "./Components/lists/TodoList";
import Settings from "./Components/setting/Settings";

function App() {
  return (
    <div className="App">
      {/* <EjemploUseMemo></EjemploUseMemo> */}
      {/* <EjemploUseBoolean></EjemploUseBoolean> */}
      <TaskList></TaskList>
      <Settings></Settings>
    </div>
  );
}

export default App;
