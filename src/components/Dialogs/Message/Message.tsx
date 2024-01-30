import React, {RefObject} from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from '../../../redux/store';


const Messages: React.FC<MessageType> = (props) => {

    return (
        <>
            <div className={s.message}>{props.message}</div>
        </>
    );
}


export default Messages;