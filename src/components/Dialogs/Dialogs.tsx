import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Messages from './Message/Message';
import state, {DialogsPageType, RootStateType} from '../../redux/state';

const Dialogs = (props: DialogsPageType) => {
    let dialogsElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messageElement = props.messages.map(m => <Messages key={m.id} message={m.message} id={m.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    );
};

export default Dialogs;
