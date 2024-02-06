import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsCaontainer";







const MyPosts = (props: MyPostPropsType) => {


    let postsElement = props.profilePage.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                           id={post.id}/>)

    let newPostEl: RefObject<HTMLTextAreaElement> = React.createRef() //Типизация для ref RefObject<К какому ЭЛ используем>



    let onAddPost = () => {
        props.addPost()

    }

    let onPostChange = () => {
        let text = newPostEl.current?.value
        if(text)
            props.updateNewPostText(text)

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