import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>
          Todo List MobX
        </h1>
      </header>
      <section>
        <TodoList />
      </section>
    </div>
  );
}



export default App;
