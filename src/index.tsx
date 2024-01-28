import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StoreType} from "./redux/redux-store";

let rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}


store.subscribe(() => {
    rerenderEntireTree(store)
})
rerenderEntireTree(store)




