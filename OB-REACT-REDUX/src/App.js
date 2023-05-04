
import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainers from './components/containers/TodoFormContainers';

function App() {
  return (
    <div className="App">
      <header>
        <TodosContainer />
        <TodoFormContainers />
      </header>
    </div>
  );
}

export default App;
