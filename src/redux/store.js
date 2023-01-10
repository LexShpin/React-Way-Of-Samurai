import messagesReducer from "./messagesReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

const store = {
    _state: {
        profile: {
            postsData: [
                { id: 1, message: "Hi! How are you?", likeCount: 3 },
                { id: 2, message: "It is my first post", likeCount: 5 },
              ],
            newPostText: ''
        },
        messages: {
            users: [
                { id: 1, name: "Vanya" },
                { id: 2, name: "Sergey" },
                { id: 3, name: "Link" },
                { id: 4, name: "John" },
              ],
            
              dialogues: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How you doing" },
                { id: 3, message: "What up beatch" },
                { id: 4, message: "Jeezz bro" },
              ],
              newMessageBody: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Vanya', avatar: ''},
                {id: 2, name: 'Sergey', avatar: ''}
            ]
        }
    },
    _callSubscriber(state) {
        console.log('state has changed')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },


    setState(state) {
        this._state = state
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.messages = messagesReducer(this._state.messages, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
        
}

export default store
