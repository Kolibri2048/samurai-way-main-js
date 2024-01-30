import React, {ChangeEvent, ChangeEventHandler, RefObject} from 'react';
import DialogItem from './DialogsItem/DialogItem';
import Messages from './Message/Message';
import {
    OnMessageChangeAC,
    SendMessage
} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {PropsTypeStore} from "../../App";




const DialogsContainer:React.FC<PropsTypeStore> = (props) => {

    let state = props.store.getState().dialogsPage


    let onSendMessageClick = () => {
        props.store.dispatch(SendMessage())
    }

    let onNewMessageChange = (body:string) => {
        props.store.dispatch(OnMessageChangeAC(body))
    }



    return (

        <Dialogs updateOnMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} state={state}  />

    );
};

export default DialogsContainer;
