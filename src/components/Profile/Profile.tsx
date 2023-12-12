import React from 'react';
import MyPosts, {profileType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: profileType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}
                     newPostText = {props.newPostText}
                     dispatch={props.dispatch}

            />
        </div>
    )
}

export default Profile