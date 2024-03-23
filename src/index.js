import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { CounterProvider } from "./components/UseContext/counter";
// import { CounterButton } from "./components/UseContext/counterButton";
import { BrowserRouter } from "react-router-dom";
// import GlobalState from "./components/food-recipe-app/Context/ContextAPI";
import { Provider } from "react-redux";
import store from "./components/shopping-cart-app/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        {/* <CounterProvider> */}

        <App />

        {/* <CounterButton /> */}
        {/* </CounterProvider> */}
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
