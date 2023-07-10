import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import { StateContext } from "./context/StateContext";
import { store, persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StateContext>
          <App />
        </StateContext>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);