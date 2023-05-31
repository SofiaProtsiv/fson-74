import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import AppBeforeRefactoring from "./AppBeforeRefactoring";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppBeforeRefactoring />);
root.render(<App />);