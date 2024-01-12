import {ActionsTypes, PostType, ProfilePageType} from "./state";

export const AddPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}

export const OnPostChangeAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export const profileReducer = (state: ProfilePageType, action: ActionsTypes ) => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state

        default:
            return state

    }
}



