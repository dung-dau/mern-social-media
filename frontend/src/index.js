import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from "./App";

// the second parameter is the store enhancer
// used to enhance the store with middleware
// applyMiddleware is the suggested way to add middleware to redux
// thunks allows the store to make use of async logic
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
