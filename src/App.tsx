import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import state, {addPost, PostType} from "./redux/state";


const App  = () => {

    let messageDialogs = state.dialogsPage.dialogs
    let message2Dialogs = state.dialogsPage.messages
    let profilePost = state.profilePage.posts

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
                            posts={profilePost}
                            addPostCallBack={addPost}
                        />}
                    />

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
