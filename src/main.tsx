import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { StoreProvider, initStore } from "@/models";

const store = initStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider value={store}>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
