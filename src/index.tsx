import React from 'react';
import './index.css';
import state, {RootStateType, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)



