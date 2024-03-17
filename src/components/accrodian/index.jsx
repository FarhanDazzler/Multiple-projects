import React from "react";
import { useState } from "react";
import data from "./data";
import "./styles.css";

export const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  let handleClick = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
    console.log(selected);
  };

  let handleMultiClick = (currentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };

  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        Multi-selection Enabled
      </button>
      <div className="accordain">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item">
                <div
                  onClick={
                    enableMultipleSelection
                      ? () => handleMultiClick(dataItem.id)
                      : () => handleClick(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.first_name}</h3>
                  <span>+</span>
                </div>
                {enableMultipleSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.text}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.text}</div>
                    )}
                {/* {selected === dataItem.id ? (
                  <div className="content">{dataItem.text}</div>
                ) : null} */}
              </div>
            );
          })
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};
