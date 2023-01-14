import { connect } from "react-redux"
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/messagesReducer"
import Messages from "./Messages"
import {Navigate} from "react-router-dom";
import React from "react";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogues: state.messages.dialogues,
        users: state.messages.users,
        newMessageBody: state.messages.newMessageBody,
        isAuth: state.auth.isAuth
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)