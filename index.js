import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-calendar/dist/Calendar.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./services/reducerNoteMaking";
import NoteMaking from "./component/noteMaking";
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <NoteMaking />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
