import React from "react";
import { useReducer } from "react";

function Counter() {
  const initialState = 99;

  const reducer = (currState, action) => {
    let newState = currState;
    if (action.type === "INCREMENT") {
      newState = currState + 1;
    } else if (action.type === "DECREMENT") {
      newState = currState - 1;
    }
    return newState;
  };

  let [count, setCount] = useReducer(reducer, initialState);

  const increment = () => {
    setCount({
      type: "INCREMENT",
    });
  };
  const decrement = () => {
    setCount({
      type: "DECREMENT",
    });
  };

  return (
    <div>
      {`Counter : ${count}`}
      <br /> <br />
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
