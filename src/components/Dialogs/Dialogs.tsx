import React, {ChangeEvent, ChangeEventHandler, RefObject} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Messages from './Message/Message';
import {DialogsPageType} from "../../redux/state";


type DialogsType = {
    state:  DialogsPageType
    updateOnMessageBody: (body: string) => void
    sendMessage: () => void

}


const Dialogs = (props: DialogsType) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messageElement = props.state.messages.map(m => <Messages key={m.id} message={m.message} id={m.id}/>);
    let newMessageBody = props.state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateOnMessageBody(body)
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
