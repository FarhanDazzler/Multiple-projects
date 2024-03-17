import React from "react";
import { MenuList } from "./menu-list";

export const Treeview = ({ menu = [] }) => {
  return (
    <div>
      <MenuList list={menu} />
    </div>
  );
};
