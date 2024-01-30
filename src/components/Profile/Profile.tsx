import React from 'react';
import MyPosts, {profileType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsCaontainer from "./MyPosts/MyPostsCaontainer";

const Profile= () => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsCaontainer/>
        </div>
    )
}

export default Profile