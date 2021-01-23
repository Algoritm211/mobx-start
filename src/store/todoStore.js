import {makeAutoObservable} from "mobx";
import {todoAPI} from "../api/todo-api";


class TodoStore {
  todos = []

  constructor() {
    makeAutoObservable(this)
  }

  async fetchTodos() {
    const todos = await todoAPI.getTodos()
    this.todos = todos
  }

  setCompleted(id) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

}

export default new TodoStore()