import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import state, {addPost, PostType, updateNewPostText} from "./redux/state";


const App  = () => {

    let messageDialogs = state.dialogsPage.dialogs
    let message2Dialogs = state.dialogsPage.messages
    let profilePost = state.profilePage.posts
    let profileNewText = state.profilePage.newPostText

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route
                        path='/dialogs'
                        render={() => <Dialogs
                            dialogs={messageDialogs}
                            messages={message2Dialogs}

                        />}
                    />
                    <Route path='/profile' render={() =>
                        <Profile
                            newPostText={profileNewText}
                            profilePage={profilePost}
                            addPostCallBack={addPost}
                            updateNewPostText={updateNewPostText}
                        />}
                    />

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
