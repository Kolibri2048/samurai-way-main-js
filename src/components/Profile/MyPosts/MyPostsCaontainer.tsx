import React from 'react';
import {AddPostAC, OnPostChangeAC,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {PostType} from "../../../redux/store";


// const MyPostsContainer= () => {
//
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState()
//                 let addPost = () => {
//                     store.dispatch(AddPostAC())
//                 }
//
//                 let onPostChange = (text: string) => {
//
//                     store.dispatch(OnPostChangeAC(text))
//                 }
//                 return (<MyPosts updateNewPostText={onPostChange}
//                          addPost={addPost}
//                          profilePage={state.profilePage.posts}
//                          newPostText={state.profilePage.newPostText}/>
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

type MapStatePropsType = {
    profilePage: PostType[],
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType



let mapStateToProps = (state: AppRootStateType):MapStatePropsType => {
    return{
        profilePage: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return{
        addPost: () => {
            dispatch(AddPostAC())
        },
        updateNewPostText: (text:string) => {
            dispatch(OnPostChangeAC(text))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer