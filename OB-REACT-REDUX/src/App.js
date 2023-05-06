
import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainers from './components/containers/TodoFormContainers';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header>
        <TodosContainer />
        <TodoFormContainers />
        {/* Filter Options contain Filter Container */}
        <FilterOptions />
      </header>
    </div>
  );
}

export default App;
