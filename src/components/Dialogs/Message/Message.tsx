import React, {RefObject} from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from '../../../redux/state';




const Messages:React.FC<MessageType> = (props) => {
    let postMessageRef: RefObject<HTMLTextAreaElement> = React.createRef()

    let messageClick = () => {
        let text = postMessageRef.current?.value
        alert(text)
    }
    return (<>
        <div className={s.message}>{props.message}</div>
            <textarea ref={postMessageRef}></textarea>
            <button onClick={messageClick}>add text</button>
        </>
    );
}


export default Messages;