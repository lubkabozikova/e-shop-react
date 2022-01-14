import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CartContextProvider from "./store/CartContextProvider";
import BackendContextProvider from "./communicationWithBackend/BackendContextProvider-alt";

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <BackendContextProvider>
        <App />
      </BackendContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
