import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./components/App";
import { Provider } from 'react-redux';
import { store } from './store';

ReactDom.createRoot(document.querySelector('#root')).render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>
)