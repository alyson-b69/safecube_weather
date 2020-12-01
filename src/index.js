import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import { watcherSagas } from "./sagas/weather_saga";

import Log from "./middlewares/log";

import App from "./components/App";
import "./assets/styles/Custom.scss";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(Log, sagaMiddleware));

sagaMiddleware.run(watcherSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
