import { connect } from "react-redux"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer"
import MyPosts from './MyPosts'

const mapStateToProps = (state) => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer