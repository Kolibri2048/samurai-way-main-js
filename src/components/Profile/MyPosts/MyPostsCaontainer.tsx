import React, {RefObject} from 'react';
import {AddPostAC, OnPostChangeAC,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {PropsTypeStore} from "../../../App";






const MyPostsContainer:React.FC<PropsTypeStore> = (props) => {
    let state = props.store.getState()


    let addPost = () => {
        props.store.dispatch(AddPostAC(state.profilePage.newPostText))
    }

    let onPostChange = (text: string) => {

        props.store.dispatch(OnPostChangeAC(text))
    }


    return (
       <MyPosts  updateNewPostText={onPostChange}
                 addPost={addPost}
                 profilePage={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}   />
    )
}


export default MyPostsContainer