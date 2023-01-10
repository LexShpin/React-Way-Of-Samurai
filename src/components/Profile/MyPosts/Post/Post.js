import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://dogsqueensland.org.au/media/1003/buying-a-dog.jpg' />
            <span>{props.message}</span>
            <div>
                <span>like </span>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post