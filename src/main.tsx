import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./core/components/App";
import "./styles.css";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
