import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";
import post from "./Post/Post";


export type profileType = {
    posts: PostType[]
    addPostCallBack: (message: string) => void
}


const MyPosts = (props:profileType) => {


    let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)

    let newPostEl: RefObject<HTMLTextAreaElement> = React.createRef() //Типизация для ref RefObject<К какому ЭЛ используем>

    let onAddPost = () => {
        if (newPostEl.current) {
            props.addPostCallBack(newPostEl.current.value)
            newPostEl.current.value = ''
        }
    }



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostEl}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
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