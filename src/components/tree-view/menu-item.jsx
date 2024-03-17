import React, { useState } from "react";
import { MenuList } from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa";

export const MenuItem = ({ item }) => {
  const [displayCurrentChild, setDisplayCurrentChild] = useState({});
  function handleToggleChildren(currentLabel) {
    setDisplayCurrentChild({
      ...displayCurrentChild,
      [currentLabel]: !displayCurrentChild[currentLabel],
    });
  }

  console.log(displayCurrentChild);
  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChild[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChild[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};
