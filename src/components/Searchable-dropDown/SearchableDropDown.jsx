import React, { useEffect, useState } from "react";
import { data } from "./data";

export const SearchableDropDown = () => {
  const [text, setText] = useState("");
  const [items, setItem] = useState(data);
  useEffect(() => {
    const filterdata = items.filter((item) => {
      const lowerCaseText = text.toLowerCase();
      return (
        item.title.toLowerCase().includes(lowerCaseText) ||
        item.category.toLowerCase().includes(lowerCaseText)
      );
    });
    text ? setItem(filterdata) : setItem(data);
  }, [text]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: "5px",
        color: "black",
        fontSize: "19px",
        paddingLeft: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Please search here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          borderRadius: "5px",

          padding: "10px 10px",
        }}
      />
      <ul className="dropdown-menu">
        {items.map((item) => (
          <li key={item} style={{ color: "#0f9d58", fontSize: "19px" }}>
            <div
              style={{
                color: "slategray",
                fontFamily: "arial",
                fontSize: "25px",
              }}
            >
              {item.title}
            </div>
            <div>{item.description}</div>
            <div style={{ color: "blue" }}>{item.category}</div>
            <div style={{ color: "red" }}>${item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
