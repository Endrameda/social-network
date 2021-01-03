import React from 'react'
import styles from "./MyPosts.module.scss";
import { Form, Input, Textarea } from "../../common/Form/Form";

const errorsObject = {
	required: 'Required field'
}

export default function AddPostForm (props) {
	const onAddPost = event => {
		props.addPost(event.addPostText)
	}
	
	return (
		<Form onSubmit={ onAddPost } className={ styles.addPartWrapper }>
			<Textarea name={ 'addPostText' } registerObject={ errorsObject }/>
			<Input name='submit' type='submit' className="button" value='Add new post'/>
		</Form>
	)
}