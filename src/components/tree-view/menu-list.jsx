import React from "react";
import { MenuItem } from "./menu-item";

export const MenuList = ({ list = [] }) => {
  return (
    <ul>
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
};
