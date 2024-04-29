import React, { useState } from "react";
import { locations } from "./data.js";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";

export const NavigationToggle = () => {
  const [updatedlocations, setUpdatedLocations] = useState(locations);

  const handleUp = (index) => {
    if (index === 0) return;
    let newArr = [...updatedlocations];
    let temp;
    temp = newArr[index];
    newArr[index] = newArr[index - 1];
    newArr[index - 1] = temp;
    setUpdatedLocations(newArr);
  };

  const handleDown = (index) => {
    if (index.length - 1) return;
    let newArr = [...updatedlocations];
    let temp;
    temp = newArr[index];
    newArr[index] = newArr[index + 1];
    newArr[index + 1] = temp;
    setUpdatedLocations(newArr);
  };
  return (
    <div style={{ width: "50%", color: "olive" }}>
      {updatedlocations.map((item, index) => (
        <div
          style={{
            display: "flex",

            // width: "50%",
            // height: "auto",
            alignItems: "center",
            fontSize: "1.5rem",
            cursor: "pointer",
            justifyContent: "space-between",
          }}
        >
          <p key={index}>{item}</p>
          <div>
            {index === 0 ? (
              <br />
            ) : (
              <MdKeyboardDoubleArrowUp
                onClick={() => {
                  handleUp(index);
                }}
              />
            )}
          </div>{" "}
          <div>
            {index === locations.length - 1 ? (
              <br />
            ) : (
              <MdKeyboardDoubleArrowDown
                onClick={() => {
                  handleDown(index);
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
