import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import { StateContext } from "./context/StateContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, 
      keepPreviousData : true
    },
  },
})

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <StateContext>
        <App />
      </StateContext>
    </QueryClientProvider>
  </BrowserRouter>
);
