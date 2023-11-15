import React, {RefObject} from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from '../../../redux/state';
import state from "../../../redux/state";


const Messages = (props: MessageType) => {
    let testArMessRef: RefObject<HTMLTextAreaElement> = React.createRef()

    let messageClick = () => {
        let text = testArMessRef.current?.value
        alert(text)
    }
    return (<>
        <div className={s.message}>{props.message}</div>
        <div>
            <textarea ref={testArMessRef}></textarea>
            <button onClick={messageClick}>add text</button></div>
        </>
    );
}


export default Messages;