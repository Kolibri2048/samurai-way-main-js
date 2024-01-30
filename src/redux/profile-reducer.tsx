import {ActionsTypes, PostType, ProfilePageType} from "./store";

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

let initialState = {
    posts: [
        {id: 1, message: 'Hi, How are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 3, message: 'It\'s my first post', likesCount: 23},
        {id: 4, message: 'It\'s my first post', likesCount: 2},
    ],
    newPostText: 'it-kamasutra.com'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes ) => {
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



