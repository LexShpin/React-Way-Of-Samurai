import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    console.log(props)

    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostsContainer  />
        </div>
    )
}

export default Profile