import React, {RefObject} from 'react';
import {AddPostAC, OnPostChangeAC,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeConext";


const MyPostsContainer= () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(AddPostAC(state.profilePage.newPostText))
                }

                let onPostChange = (text: string) => {

                    store.dispatch(OnPostChangeAC(text))
                }
                return (<MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         profilePage={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer