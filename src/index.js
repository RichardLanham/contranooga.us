import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
serviceWorkerRegistration.register();
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
