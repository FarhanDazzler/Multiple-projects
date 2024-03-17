import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount, name: "Farhan" }}>
      {props.children}
    </CounterContext.Provider>
  );
};
