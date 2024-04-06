import React from "react";
import { CurrencyConverter } from "./Components/currency-converter";

export const CurrencyConverterHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <CurrencyConverter />
    </div>
  );
};
