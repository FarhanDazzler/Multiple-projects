import React, { useEffect, useRef, useState } from "react";

export const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [running, isRunning] = useState();
  const value = useRef();

  useEffect(() => {
    if (running === "start") {
      value.current = setInterval(() => setCount((prev) => prev + 1), 1000);
    } else if (running === "stop") {
      clearInterval(value.current);
      setCount(0);
    } else {
      clearInterval(value.current);
    }
  }, [running]);
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        color: "black",
        width: "80%",
        height: "120px",

        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        border: "1px solid black",
        borderRadius: "5px",
        margin: "10px",
        padding: "10px",
        boxShadow: "5px 5px 10px black",
      }}
    >
      count: {count}
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          borderRadius: "5px",
          margin: "10px",
          padding: "10px",

          gap: "10px",
          color: isHovered ? "black" : "slategray",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button onClick={() => isRunning("start")}>start</button>
        <button onClick={() => isRunning("pause")}>pause</button>
        <button onClick={() => isRunning("stop")}>stop</button>
      </div>
    </div>
  );
};
