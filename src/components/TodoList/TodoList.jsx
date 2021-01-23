import React, {useEffect, useState} from 'react';
import classes from './TodoList.module.scss'
import {observer} from "mobx-react-lite";
import todoStore from "../../store/todoStore";
import Loader from "../Loader/Loader";

const TodoList = observer(() => {

  const {loading, todos} = todoStore

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    todoStore.fetchTodos()
  }, [])

  const filterTodos = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((element) => !element.completed)
      case 'done':
        return items.filter((element) => element.completed)
      default:
        return items
    }
  }


  const todoBlock = filterTodos(todos, filter).map((todo) => {
    return (
      <div className={ classes.todoContainer } key={ todo.id }>
        <div className={ classes.todoTitle }>
          <p>{ todo.title }</p>
        </div>
        <div className={ classes.todoPanel }>
          <div className={ classes.todoAction + ' ' + classes.delete } onClick={ () => todoStore.removeTodo(todo.id) }>
            <i className="fas fa-trash"></i>
          </div>
          { todo.completed
            ? <div className={ classes.todoAction + ' ' + classes.completed }
                   onClick={ () => todoStore.setCompleted(todo.id) }>
              <i className="fas fa-check-square"></i>
            </div>

            : <div className={ classes.todoAction + ' ' + classes.uncompleted }
                   onClick={ () => todoStore.setCompleted(todo.id) }>
              <i className="fas fa-times"></i>
            </div>
          }
        </div>
      </div>
    )
  })

  return (
    <div className={ classes.todoList }>
      <div className={ classes.sortButtons }>
        <div className={classes.completedTodos}>
          Now completed <span>{todoStore.countCompletedTodos}</span>
        </div>
        <button onClick={ () => setFilter('all') }>All</button>
        <button onClick={ () => setFilter('done') }>Completed</button>
        <button onClick={ () => setFilter('active') }>Not completed</button>
      </div>
      { loading
        ? <Loader />
        : todoBlock
      }
    </div>
  );
});

export default TodoList;