import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

// JS
// const root = document.querySelector("#root")
// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// console.dir(h1)
// root.prepend(h1)

// React
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// const h1 = React.createElement("h1", {id: 1, className:"title", children: ["Hello world", "react"]});
// root.render(h1)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* {app()} */}
  </React.StrictMode>
);
