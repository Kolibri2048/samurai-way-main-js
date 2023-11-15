import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../redux/state";



const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_neKBm7xSrBCuWJDbGjq-xMC_PZb-5WLdxw&usqp=CAU'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post