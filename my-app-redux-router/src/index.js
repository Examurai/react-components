import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "sanitize.css/sanitize.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

serviceWorker.unregister();
