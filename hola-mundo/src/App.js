import logo from './logo.svg';
import './App.css';
import Usuario from './components/container/ComponenteA';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* componente propio Greenting.jsx */}
        {/* <Greeting name="stevenn"></Greeting> */}
        {/* Componente de ejemplos funcinales */}
        {/* <GreetingF name="stevenn"></GreetingF> */}
        {/* Componente de Listado de Tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        <Usuario></Usuario>
      </header>
    </div>
  );
}

export default App;
