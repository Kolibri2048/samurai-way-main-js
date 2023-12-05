import React from 'react';
import MyPosts, {profileType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, updateNewPostText} from "../../redux/state";

const Profile = (props: profileType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}
                     newPostText = {props.newPostText}
                     addPostCallBack={addPost}
                     updateNewPostText={updateNewPostText}

            />
        </div>
    )
}

export default Profile