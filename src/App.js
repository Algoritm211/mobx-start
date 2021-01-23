import './App.css';
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <div className='appHeader'>
        <h1>
          Todo List MobX
        </h1>
      </div>
      <section>
        <TodoList />
      </section>
    </div>
  );
}



export default App;
