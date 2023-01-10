import { connect } from "react-redux"
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/messagesReducer"
import Messages from "./Messages"

const mapStateToProps = (state) => {
    return {
        dialogues: state.messages.dialogues,
        users: state.messages.users,
        newMessageBody: state.messages.newMessageBody,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer