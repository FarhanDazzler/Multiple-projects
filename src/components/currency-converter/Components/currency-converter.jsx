import React, { useEffect, useState } from "react";
import { CurrencyDropdown } from "./currency-dropdown";

export const CurrencyConverter = () => {
  const [currency, setCurrency] = useState([]);
  // const [amount, setAmount] = useState(1);

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();

      setCurrency(data);
    } catch (error) {
      console.error("ERR", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);
  console.log(currency);
  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white shadow-md rounded-lg">
      <h1 class="text-5xl font-semibold text-blue-500  mb-5">
        Currency Converter
      </h1>
      <div>
        <CurrencyDropdown />
      </div>
      <div className="mt-5">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>

        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded shodows-sm focus:outline"
        />
      </div>
      <div className="flex justify-end mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 focus:ring-blue-500  text-slate-100 disabled:cursor-not-allowed px-5 py-2 text-sm font-medium rounded-md">
          Convert
        </button>
      </div>
      <div className="mt-4 text-lg font-medium text-right text-green-600">
        Converted Amount: 69 USD
      </div>
    </div>
  );
};
