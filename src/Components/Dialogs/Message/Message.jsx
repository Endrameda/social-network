import styles from "./Message.module.scss";
import React from "react";

const Message = (props) => {

    const type = (messageType) => {
        if (+messageType === 1) {
            return styles.message_right
        } else {
            return styles.message_left
        }
    }

    return (
        <div className={`${type(props.type)} ${styles.message}`}>
            {props.message}
        </div>
    )
}

export default Message