import React, { useState, useRef } from "react";
import "./style.css";

export const MoveableDiv = () => {
  const [movable, setMovable] = useState({ x: 0, y: 0 });
  const blockRef = useRef();

  const movableFn = (dir) => {
    const boundries = {
      up: movable.y <= 0,
      left: movable.x <= 0,
      right: movable.x >= blockRef?.current.offsetWidth - 145,
      down: movable.y >= blockRef?.current.clientHeight - 115,
    };
    if (boundries[dir]) return;
    const updates = {
      up: { y: movable.y - 10 },
      down: { y: movable.y + 10 },
      left: { x: movable.x - 10 },
      right: { x: movable.x + 10 },
    };

    setMovable({ ...movable, ...updates[dir] });
  };

  return (
    <div ref={blockRef} className="container">
      <div className="horizontal">
        <button className=" up" onClick={() => movableFn("up")}>
          Up
        </button>
      </div>

      <div className="vertical">
        <button className=" left" onClick={() => movableFn("left")}>
          {" "}
          left
        </button>
        <div className="wrapper">
          <div
            className="box"
            style={{ left: movable.x, top: movable.y }}
          ></div>
        </div>

        <button className="Box right" onClick={() => movableFn("right")}>
          right
        </button>
      </div>
      <button className=" down" onClick={() => movableFn("down")}>
        Down
      </button>
    </div>
  );
};
