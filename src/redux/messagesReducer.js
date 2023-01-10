
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
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
}

const messagesReducer = (state = initialState, action) => {


    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE: 
            return {
                ...state,
                newMessageBody: '',
                dialogues: [...state.dialogues, {id: 5, message: state.newMessageBody}]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

export default messagesReducer