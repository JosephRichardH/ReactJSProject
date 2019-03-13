import React from 'react';
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "./Store"

const rootEl = document.getElementById("root");
const render = Component =>
    ReactDOM.render(
    <Provider store = {store}>
    <BrowserRouter>
        <Component/>
    </BrowserRouter>
    </Provider>,
    rootEl
);

render (AppRouter);

serviceWorker.unregister();