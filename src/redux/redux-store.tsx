import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";


let rootReducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,

})


export let store = createStore(rootReducers)
// window.store = store;
export type AppRootStateType = ReturnType<typeof rootReducers>
export type StoreType = typeof store


export default store