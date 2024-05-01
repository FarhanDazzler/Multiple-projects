import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export const CollapsibleBox = () => {
  const [collapsable, setCollapsable] = useState(true);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px 10px",

        margin: "20px 20px",
        width: "50%",
      }}
    >
      <div
        onClick={() => setCollapsable(!collapsable)}
        style={{
          color: "#333",

          fontSize: "20px",
          fontFamily: "Helvetica Neue, sans-serif",
          fontWeight: "500",
          display: "flex",
          cursor: "pointer",
          justifyContent: "space-between",
          background: "#ccc",
          borderRadius: "5px",
          width: "100%",
          height: "40px",
          padding: "10px 10px",
        }}
      >
        <span>Title</span>
        {collapsable ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <MdOutlineKeyboardArrowDown />
        )}
      </div>
      <div
        style={{
          width: "100%",
          height: "40px",
          padding: "10px 10px",
          display: collapsable ? "block" : "none",
          transition: "heigth 1s ease",
        }}
      >
        This is the content
      </div>
    </div>
  );
};
