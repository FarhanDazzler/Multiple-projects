import React, { useContext } from "react";
import { CounterContext } from "./counter";

export const CounterButton = () => {
  const counterContext = useContext(CounterContext);
  //   console.log(counterContext);
  return (
    <div>
      <h1>Count:{counterContext.count}</h1>
      <button
        onClick={() => {
          counterContext.setCount(counterContext.count + 1);
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          counterContext.setCount(counterContext.count - 1);
        }}
      >
        Decreament
      </button>
    </div>
  );
};
