import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import { StateContext } from "./context/StateContext";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StateContext>
        <App />
      </StateContext>
    </BrowserRouter>
  </Provider>
);
