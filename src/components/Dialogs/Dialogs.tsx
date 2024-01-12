import React, {ChangeEvent, ChangeEventHandler, RefObject} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Messages from './Message/Message';
import {

    OnMessageChangeAC,
    SendMessage
} from '../../redux/dialogs-reducer';
import {ActionsTypes, DialogType, MessageType} from "../../redux/state";


type DialogsType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}


const Dialogs = (props: DialogsType) => {
    let dialogsElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messageElement = props.messages.map(m => <Messages key={m.id} message={m.message} id={m.id}/>);
    let newMessageBody = props.newMessageBody;


    let onSendMessageClick = () => {
        props.dispatch(SendMessage())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(OnMessageChangeAC(body))
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   placeholder='Enter your message'
                                    onChange={onNewMessageChange}
                    ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>

    );
};

export default Dialogs;
