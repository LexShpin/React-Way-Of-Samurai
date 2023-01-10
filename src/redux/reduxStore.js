import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

// const store = configureStore()

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

const store = createStore(reducers)

window.store = store

export default store