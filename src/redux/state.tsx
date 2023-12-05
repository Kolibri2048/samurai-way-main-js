let rerenderEntireTree = (state: RootStateType) => {
    console.log('state changing')
}

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


export type updateNewPostTextType = (newText: string) => void

let state: RootStateType = {
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
}

export const addPost = () => {
    let newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText: updateNewPostTextType = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: RootStateType) => void) => {
    rerenderEntireTree = observer;
}


export default state