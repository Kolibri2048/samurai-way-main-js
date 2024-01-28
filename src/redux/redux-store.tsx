import {combineReducers, createStore, Store} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,

})


export let store = createStore(reducers)

export type AppRootStateType = ReturnType<typeof reducers>
export type StoreType = typeof store

export default store