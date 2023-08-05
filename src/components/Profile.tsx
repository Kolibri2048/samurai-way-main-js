import React from 'react';
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg'/>
            </div>
            <div>
                ava + descr
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>

        </div>
)
}

export default Profile