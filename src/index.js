import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Issues from "./service/issues";

const issues = new Issues();

ReactDOM.render(
  <React.StrictMode>
    <App issues={issues} />
  </React.StrictMode>,
  document.getElementById("root")
);
