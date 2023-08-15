
import './App.css';
import Fetchexample from './components/container/FetchExample';
import Father from './components/container/father';
import TaskListComponent from './components/container/task_list';


function App() {
  return (
    <div className="App">
      <TaskListComponent></TaskListComponent>
      {/* <Father></Father> */}
      <Fetchexample></Fetchexample>
    </div>
  );
}

export default App;
