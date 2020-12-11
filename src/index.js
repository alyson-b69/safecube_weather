import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";
import { watcherSagas } from "./sagas/weather_saga";

import Log from "./middlewares/log";

import App from "./components/App";
import "./assets/styles/Custom.scss";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(Log, sagaMiddleware))
);

sagaMiddleware.run(watcherSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
