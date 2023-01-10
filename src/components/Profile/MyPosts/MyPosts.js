import React from 'react';
import { connect } from 'react-redux';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  const newPostTextArea = React.createRef()

  const onAddPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    props.updateNewPostText(newPostTextArea.current.value)
  }

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostTextArea} onChange={onPostChange} value={props.newPostText} />
        <br />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {props.postsData.map(post => <Post id={post.id} message={post.message} likeCount={post.likeCount} />)}
      </div>
    </div>
  );
};

export default MyPosts
