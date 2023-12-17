export type MessageType = {
    id: number;
    message: string;
};

export type DialogType = {
    id: number;
    name: string;
};

export type PostType = {
    id: number;
    message: string;
    likesCount: number;
};

export type ProfilePageType = {
    posts: Array<PostType>;
    newPostText: string
};

export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
};


export type RootStateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
};


export type StoreType = {
    _state: RootStateType,
    _callSubscriber: (state: RootStateType) => void,
    subscribe: (observer: () => void) => void,
    getState: () => RootStateType
    dispatch: (action: ReturnType<typeof AddPostAC> |  ReturnType<typeof OnPostChangeAC>) => void
}

// type AddPostActionType = {
//     type: 'ADD-POST',
//     newPostText: string
// } |
// type AddPostActionType = ReturnType<typeof AddPostAC>
//
// type ChangeNewText = ReturnType<typeof OnPostChangeAC>

export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof OnPostChangeAC>

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


const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, How are you', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 23},
                {id: 3, message: 'It\'s my first post', likesCount: 23},
                {id: 4, message: 'It\'s my first post', likesCount: 2},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
            ]
        },
    },
    _callSubscriber(){
        console.log('state changing')
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },



    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === 'ADD-POST' ) {
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }




}

export default store