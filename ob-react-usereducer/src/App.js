import './App.css';
import Counter from './components/Counter';
import LoginUseReducer from './components/LoginUseReducer';
import LoginUseState from './components/LoginUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter></Counter> */}
        <LoginUseReducer></LoginUseReducer>
        {/* <LoginUseState></LoginUseState> */}
      </header>
    </div>
  );
}

export default App;
