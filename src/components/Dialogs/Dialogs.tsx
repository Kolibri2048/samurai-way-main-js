import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogTypProps = {
    name: string
    id: string
}

type MessageTypeProps = {
    message: string
}

const DialogItem = (props:DialogTypProps) => {
    let path = '/dialogs/' + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props:MessageTypeProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

            <DialogItem name='Dimych' id='1'/>
            <DialogItem name='Andrey' id='2'/>
            <DialogItem name='Viktor' id='3'/>
            <DialogItem name='Sveta' id='4'/>
            <DialogItem name='Sasha' id='5'/>
            <DialogItem name='Valera' id='6'/>

            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it?'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
};

export default Dialogs;