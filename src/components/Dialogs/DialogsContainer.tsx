import React from 'react';

import {
    OnMessageChangeAC,
    SendMessage
} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/store";
import {Dispatch} from "redux";


// const DialogsContainer = () => {
//
//
//     return (
//
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState().dialogsPage
//                 let onSendMessageClick = () => {
//                     store.dispatch(SendMessage())
//                 }
//
//                 let onNewMessageChange = (body: string) => {
//                     store.dispatch(OnMessageChangeAC(body))
//                 }
//                 return (
//                     <Dialogs updateOnMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} state={state}/>
//
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//
//     );
// };

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    updateOnMessageBody: (body:string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppRootStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        updateOnMessageBody: (body: string) => {
            dispatch(OnMessageChangeAC(body))
        },
        sendMessage: () => {
            dispatch(SendMessage())
        },
    }
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
