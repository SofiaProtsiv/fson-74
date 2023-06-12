import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateContext } from "./context/StateContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <StateContext>
      <App />
    </StateContext>
  </BrowserRouter>
);
