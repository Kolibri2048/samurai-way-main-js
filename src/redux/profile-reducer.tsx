import {ActionsTypes, PostType, ProfilePageType} from "./store";

export const AddPostAC = () => {
    return {
        type: "ADD-POST",
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

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST' : {
            const message = state.newPostText
            let newPost: PostType = {
                id: 5,
                message: message,
                likesCount: 0
            }
            let stateCopy = {...state}

            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state

    }
}



