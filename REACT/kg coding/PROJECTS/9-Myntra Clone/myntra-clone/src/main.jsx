import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./bag.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myntraStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
