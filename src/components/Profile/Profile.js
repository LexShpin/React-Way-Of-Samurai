import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {Navigate} from "react-router-dom";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostsContainer  />
        </div>
    )
}

export default Profile