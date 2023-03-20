import logo from './logo.svg';
import './App.css';
// import Usuario from './components/container/ComponenteA';
// import Ejemplo2 from './hooks/Ejemplo2'
// import MicomponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo4 from './hooks/Ejemplo4'
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
        {/* <Usuario></Usuario> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MicomponenteConContexto></MicomponenteConContexto> */}
        <Ejemplo4 nombre="steven">
          {/* Todo lo que hay aqui, estratado como props.children */}
          <h2>
            Contenido del props.children
          </h2>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
