import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Cart } from "./cart";
import { Header } from "../components/header";

export const ShoppingApp = () => {
  return (
    <div>
      <h1>
        <Header />
      </h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
