import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { AddPostAC, } from "../../../redux/profile-reducer";
import {ActionsTypes, PostType} from "../../../redux/state";


export type profileType = {
    profilePage: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}




const MyPosts = (props: profileType) => {


    let postsElement = props.profilePage.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                           id={post.id}/>)

    let newPostEl: RefObject<HTMLTextAreaElement> = React.createRef() //Типизация для ref RefObject<К какому ЭЛ используем>



    let addPost = () => {
        // props.addPost()
        props.dispatch(AddPostAC(props.newPostText))
    }

    let onPostChange = () => {
        if (newPostEl.current) {
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: newPostEl.current.value})
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostEl}
                              value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>


            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}


export default MyPosts