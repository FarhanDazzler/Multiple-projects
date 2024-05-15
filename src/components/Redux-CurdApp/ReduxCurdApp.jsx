import React from "react";
import { Navbar } from "./Components/Navbar";
import { Form } from "./Components/Form";
import { Route, Routes } from "react-router-dom";
import { Read } from "./Components/read";
import { Update } from "./Components/update";

export const ReduxCurdApp = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
};
