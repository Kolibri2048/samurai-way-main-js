import {ActionsTypes, DialogsPageType} from "./state";

export const OnMessageChangeAC = (newMessageText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: newMessageText
    } as const
}

export const SendMessage = () => {
    return {
        type: "SEND-MESSAGE",
    } as const
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY' :
            state.newMessageBody = action.body
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 7, message: body})
            return state
        default:
            return state
    }
}


