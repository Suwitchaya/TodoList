import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from 'redux';
// import registerServiceWorker from "./registerServiceWorker";
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/todo';
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware()
  ));
  
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById("root"));
