import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Details } from "./pages/details";
import { Favorities } from "./pages/favorities";

export const FoodRecipeApp = () => {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-item/:id" element={<Details />} />
          <Route path="/favorities" element={<Favorities />} />
        </Routes>
      </div>
    </div>
  );
};
