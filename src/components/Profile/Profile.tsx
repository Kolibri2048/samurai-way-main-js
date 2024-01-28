import React from 'react';
import MyPosts, {profileType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsCaontainer from "./MyPosts/MyPostsCaontainer";
import {PropsTypeStore} from "../../App";

const Profile:React.FC<PropsTypeStore>= (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsCaontainer store={props.store}
            />
        </div>
    )
}

export default Profile