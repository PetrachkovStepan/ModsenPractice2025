import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, makeZero } from "./slices/counterSlice.js";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Прибавить
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Отнять
      </button>
      <button onClick={() => dispatch(makeZero())}>Обнулить</button>
      <span>{count}</span>
    </div>
  );
}

export default App;
