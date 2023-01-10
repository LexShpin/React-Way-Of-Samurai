import React from 'react'
import { NavLink } from 'react-router-dom'
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/messagesReducer'
import Dialogue from './Dialogue/Dialogue'
import s from './Messages.module.css'
import MessagesUser from './MessagesUser/MessagesUser'

const Messages = (props) => { 

    console.log(props);

    const sendMessageTextArea = React.createRef()

    const onSendMessage = () => {
        props.sendMessage()
    }

    const onUpdateMessageText = () => {
        props.updateNewMessageText(sendMessageTextArea.current.value)
    }

    return (
        <div className={s.messages}>
            <div className={s.messagesUsers}>
                {props.users.map(user => <MessagesUser name={user.name} key={user.id} id={user.id} />)}
            </div>
            <div className={s.messagesDialogues}>
                {props.dialogues.map(dialogue => <Dialogue message={dialogue.message} key={dialogue.id} id={dialogue.id} />)}
            </div>
            <div>
            <textarea value={props.newMessageBody} onChange={onUpdateMessageText} ref={sendMessageTextArea}></textarea>
            <button onClick={onSendMessage}>Send</button>
            </div>
            
        </div>
    )
}

export default Messages