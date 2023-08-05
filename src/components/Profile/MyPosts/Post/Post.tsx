import React from 'react';
import s from './Post.module.css'

type PropsTypePost = {
    message: string
}

const Post = (props: PropsTypePost) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_neKBm7xSrBCuWJDbGjq-xMC_PZb-5WLdxw&usqp=CAU'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post