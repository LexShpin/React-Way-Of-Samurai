import s from './Dialogue.module.css'

const Dialogue = (props) => {
    return (
        <div className={s.dialogue}>
            {props.message}    
        </div>
    )
}

export default Dialogue