import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
};

export default ProfileInfo;