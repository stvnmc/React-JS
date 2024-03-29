// import './App.css';
// import { Practica10 } from './components/pure/practica1';
// import Registerformik from './components/pure/forms/registerFormik'
// import Optionalrender from './components/pure/optionalRender';
import Greeting from './components/pure/greeting';
// import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
// import { LoginFormik } from './components/pure/forms/loginFormik';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3'
// import Ejemplo4 from './hooks/Ejemplo4';
// import Greetingstyled from './components/pure/greetingStyled';
// import Father from './components/container/father';

// import Axiosexample from "./components/pure/AxiosExample";
import Axioscrudexample from "./components/pure/AxiosCRUDExample"
// import Fetchexample from "./components/pure/FetchExample";

function App() {
  return (
    <div className="App">
     
      {/* Componente propio Greeting.jsx */}
      {/* <Greeting name={"Martín"}></Greeting> */}
      {/* Componente de ejemplo funcional */}
      {/* <Greetingf name="Martín"></Greetingf> */}
      {/* Componente de Listado de Tareas */}
      <TaskListComponent></TaskListComponent>
      {/* Ejemplos de uso de HOOKS */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* Todo loq ue hay aquí, es tratado como props.children */}
      {/* <Ejemplo4 nombre="Martín">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
      {/* <Greetingstyled name="Martín"></Greetingstyled> */}
      {/* </header> */}
      {/* Gestión de eventos */}
      {/* <Father></Father> */}
      {/* Ejemplos de Renderozadp condicional */}
      {/* <Optionalrender></Optionalrender> */}

      {/* Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}

      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent>
      <Practica10></Practica10> */}
      {/* <Registerformik></Registerformik> */}

      {/* <Fetchexample /> */}
      {/* <Axiosexample />*/}
      {/* <Axioscrudexample /> */}
    </div>
  );
}

export default App;
