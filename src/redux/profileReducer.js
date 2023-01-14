import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const LOAD_USER = 'LOAD-USER'

const initialState = {
    currentUser: null,
    postsData: [
        { id: 1, message: "Hi! How are you?", likeCount: 3 },
        { id: 2, message: "It is my first post", likeCount: 5 },
      ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
            return {
                ...state,
                postsData: [...state.postsData, {id: 5, message: state.newPostText, likeCount: 0}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case LOAD_USER:
            return {
                ...state,
                currentUser: action.currentUser
            }
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
  
export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
}

export const loadUser = (user) => ({type: LOAD_USER, currentUser: user})

export const loadUserProfile = (userId) => (dispatch) => {

    profileAPI.loadUserProfile(userId)
        .then(data => {
            dispatch(loadUser(data))
        })

}

export default profileReducer