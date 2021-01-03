import React from "react";
import styles from './MyPosts.module.scss';
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm";

const MyPosts = (props) => {
	
	const postsItem = props.postsData
		.map((post) => <Post
			name={ post.name }
			key={ post.id }
			message={ post.message }
			likeCount={ post.likeCount }
		/>);
	
	return (
		<div className={ styles.postsWrapper }>
			<h3>My Posts</h3>
			
			<AddPostForm addPost={ props.addPost }/>
			
			<div>
				{ postsItem }
			</div>
		</div>
	)
}

export default MyPosts;