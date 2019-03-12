import React from 'react';
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";


const rootEl = document.getElementById("root");
const render = Component =>
    ReactDOM.render(
    <BrowserRouter>
        <Component/>
    </BrowserRouter>,
    rootEl
);

render (AppRouter);

serviceWorker.unregister();