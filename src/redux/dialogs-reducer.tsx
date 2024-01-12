import {ActionsTypes, DialogsPageType, PostType, StoreType} from "./state";

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

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
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


