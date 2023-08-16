import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg'/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts />
        </div>
)
}

export default Profile