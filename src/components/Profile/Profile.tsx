import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsCaontainer from "./MyPosts/MyPostsCaontainer";
import MyPostsContainer from "./MyPosts/MyPostsCaontainer";

const Profile= () => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile