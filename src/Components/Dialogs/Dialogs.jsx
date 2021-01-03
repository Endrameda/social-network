import React from "react";
import styles from './Dialogs.module.scss';
import Message from "./Message/Message";
import DialogItem from "./DialogItems/DialogItems";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {
	const dialogsElements = props.state.dialogsData.map(dialog => <DialogItem
		{ ...dialog }
		key={ dialog.id }
	/>)
	
	const messagesElements = props.state.messagesData.map(message => <Message
		{ ...message }
		key={ message.id }
	/>)
	
	
	return (
		<div className={ styles.dialogs }>
			<div className={ styles.dialogItems }>
				{ dialogsElements }
			</div>
			<div className={ styles.messagesWrapper }>
				<div className={ styles.messages }>
					{ messagesElements }
				</div>
				<AddMessageForm
					state={ props.state }
					addNewMessage={ props.addNewMessage }/>
			</div>
		</div>
	)
}

export default Dialogs