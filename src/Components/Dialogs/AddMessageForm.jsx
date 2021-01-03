import React from 'react'
import styles from "./Dialogs.module.scss"
import { Form, Input, Textarea } from "../common/Form/Form";

const errorsObject = {
	required: 'Required field'
}

export default function AddMessageForm (props) {
	const onSendMessage = data => {
		props.addNewMessage(data.newMessageBody)
	}
	
	return (
		<Form className={ styles.sendPart } onSubmit={ onSendMessage }>
			<Textarea
				name={ 'newMessageBody' }
				registerObject={ errorsObject }
			/>
			<Input type={ 'submit' } name="submit" className={ 'button' } value={ 'Submit message' }/>
		</Form>
	)
}