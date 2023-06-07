import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./core/components/App";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./core/store/store";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
