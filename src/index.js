import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { searchPersons } from "./Reducers/Reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const store = createStore(searchPersons, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
