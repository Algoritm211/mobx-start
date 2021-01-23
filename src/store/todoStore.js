import {makeAutoObservable} from "mobx";
import {todoAPI} from "../api/todo-api";


const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

class TodoStore {
  todos = []
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  setTodos = (todos) => {
    this.todos = todos
  }

  setLoading(loading) {
    this.loading = loading
  }

  async fetchTodos() {
    this.setLoading(true)
    const todos = await todoAPI.getTodos()
    await sleep(1500)
    this.setTodos(todos)
    this.setLoading(false)
  }

  setCompleted(id) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  get countCompletedTodos() {
    return this.todos.filter(todo => todo.completed).length
  }

}

export default new TodoStore()