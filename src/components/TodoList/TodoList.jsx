import React, {useEffect} from 'react';
import classes from './TodoList.module.scss'
import {observer} from "mobx-react-lite";
import todoStore from "../../store/todoStore";

const TodoList = observer(() => {

  useEffect(() => {
    todoStore.fetchTodos()
  }, [])


  const todoBlock = todoStore.todos.map((todo) => {
    return (
      <div className={classes.todoContainer} key={todo.id}>
        <div className={classes.todoTitle}>
          {todo.title}
        </div>
        <div className={classes.todoPanel}>
          <div className={classes.todoAction + ' ' + classes.delete} onClick={() => todoStore.removeTodo(todo.id)}>
            <i className="fas fa-trash"></i>
          </div>
          {todo.completed
            ? <div className={classes.todoAction + ' ' + classes.completed} onClick={() => todoStore.setCompleted(todo.id)}>
              <i className="fas fa-check-square"></i>
            </div>

            : <div className={classes.todoAction + ' ' + classes.uncompleted} onClick={() => todoStore.setCompleted(todo.id)}>
              <i className="fas fa-times"></i>
            </div>
          }
        </div>
      </div>
    )
  })

  return (
    <div className={classes.todoList}>
      { todoBlock }
    </div>
  );
});

export default TodoList;