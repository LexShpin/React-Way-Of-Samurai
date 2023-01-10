import { NavLink } from 'react-router-dom'
import s from './MessagesUser.module.css'


const MessagesUser = (props) => {
    return (
        <div className={`${s.messagesUser} ${s.active}`}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default MessagesUser