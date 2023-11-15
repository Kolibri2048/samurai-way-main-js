import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import state, {RootStateType} from "./redux/state";



const App = (props: RootStateType) => {

    // let message = state.dialogsPage.dialogs
    // let message2 = state.profilePage.posts[0].message

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route
                        path='/dialogs'
                        render={() => <Dialogs
                            dialogs={props.dialogsPage.dialogs}
                            messages={props.dialogsPage.messages}

                        />}
                    />
                    <Route path='/profile' render={() =>
                        <Profile posts={props.profilePage.posts}
                        />}
                    />

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
