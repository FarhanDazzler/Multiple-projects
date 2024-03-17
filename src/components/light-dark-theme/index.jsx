import React from "react";
import { useStorage } from "./useStorage";
import "./style.css";

export const LightDarkTheme = () => {
  const [theme, setTheme] = useStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>

        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};
