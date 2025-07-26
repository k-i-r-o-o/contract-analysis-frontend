import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import configureStore from "common/redux/core/store.config";

import App from "./App";

const rootElement = document.getElementById("root") as Element;
const root = ReactDom.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
