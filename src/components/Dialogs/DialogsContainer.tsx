import React from 'react';

import {
    OnMessageChangeAC,
    SendMessage
} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../storeConext";


const DialogsContainer = () => {


    return (

        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().dialogsPage
                let onSendMessageClick = () => {
                    store.dispatch(SendMessage())
                }

                let onNewMessageChange = (body: string) => {
                    store.dispatch(OnMessageChangeAC(body))
                }
                return (
                    <Dialogs updateOnMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} state={state}/>

                )
            }
        }
        </StoreContext.Consumer>

    );
};

export default DialogsContainer;
