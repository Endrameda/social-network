import React from "react";
import styles from './FriendsAside.module.scss';
import FriendBlockItem from "./FriendBlockItem/FriendBlockItem";

const FriendsAside = (props) => {
    const renderFriendsList = props.friendsList.map(item =>
        <FriendBlockItem
            key={item.id}
            name={item.nickname}
        />
    )

    return (
        <div className={styles.friendListWrapper}>
            <h3 className={styles.title}>Friends</h3>
            <div className={styles.friendList}>
                {renderFriendsList}
            </div>
        </div>
    )
}   

export default FriendsAside