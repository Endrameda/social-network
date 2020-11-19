import React from "react";
import styles from './FriendBlockItem.module.scss'
import userAvatar from '../../../assets/img/icons/User avatar.svg'

const FriendBlockItem = (props) => {
    return (
        <div className={styles.friendsBlockItem}>
            <div className={styles.image}>
                <img src={userAvatar} alt=""/>
            </div>
            <div className={styles.nickname}>{props.name}</div>
        </div>
    )
}

export default FriendBlockItem