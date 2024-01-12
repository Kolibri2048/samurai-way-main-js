import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}


store.subscribe(() => {
    rerenderEntireTree()
})
rerenderEntireTree()




