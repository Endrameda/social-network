import React from "react";
import styles from './Dialogs.module.scss';
import Message from "./Message/Message";
import DialogItem from "./DialogItems/DialogItems";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogsData.map(dialog => <DialogItem
            {...dialog}
            key={dialog.id}
        />)

    const messagesElements = props.state.messagesData.map(message => <Message
            {...message}
            key={message.id}
        />)

    let newMessageBody = props.state.textareaValue

    const onChangeTextarea = (event) => {
        let messageText = event.target.value;

        props.updateDialogMessageText(messageText);
    }

    const onSendMessage = () => {
        if (newMessageBody.trim() === '') {
            return false
        }
        props.addNewMessage()
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styles.messagesWrapper}>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
                <div className={styles.sendPart}>
                    <textarea
                        className={styles.textarea}
                        name=""
                        id=""
                        rows="5"
                        value={newMessageBody}
                        onChange={onChangeTextarea}
                    />
                    <button onClick={onSendMessage} className={styles.button}>
                        Send message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs