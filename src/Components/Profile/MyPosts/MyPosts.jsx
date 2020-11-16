import React, { useState } from "react";
import styles from './MyPosts.module.scss';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const [textareaValue, setTextareaValue] = useState(props.newPostText);

    const postsItem = props.postsData
        .map((post) => <Post
            name={post.name}
            key={post.id}
            message={post.message}
            likeCount={post.likeCount}
        />);

    const onAddPost = () => {
        if (textareaValue === '') {
            return false
        }
        props.addPost()
        setTextareaValue('');
    };

    const onChangeTextarea = (event) => {
        let text = event.target.value;
        setTextareaValue(text);
        props.updateChangeTextarea(text)
    };

    return (
        <div className={styles.postsWrapper}>
            <h3>My Posts</h3>
            <div className={styles.addPartWrapper}>
                <div>
                    <textarea
                        className={styles.textarea}
                        name="New Post"
                        id=""
                        cols="30"
                        rows="10"
                        value={props.newPostText}
                        onChange={onChangeTextarea}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add new post</button>
                </div>
            </div>
            <div>
                {postsItem}
            </div>
        </div>
    )
}

export default MyPosts;