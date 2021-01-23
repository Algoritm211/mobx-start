import React from 'react';
import classes from './Counter.module.css'
import {observer} from "mobx-react-lite";
import counterStore from "../../store/counterStore";

const Counter = observer(() => {
  return (
    <div className={classes.counter}>
      {counterStore.counter}
      <div className={classes.buttonBlock}>
        <button className={classes.btn} onClick={ counterStore.increment.bind(counterStore)}>+</button>
        <button className={classes.btn} onClick={ counterStore.decrement.bind(counterStore)}>-</button>
      </div>

    </div>
  );
});

export default Counter;