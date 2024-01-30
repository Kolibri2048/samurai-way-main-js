import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StoreType} from "./redux/redux-store";
import {Provider} from "./storeConext";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root')
);
}


store.subscribe(() => {
    rerenderEntireTree()
})
rerenderEntireTree()




