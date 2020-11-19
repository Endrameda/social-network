import React from "react";
import styles from './Post.module.scss';
import userAvatar from '../../../../assets/img/icons/User avatar.svg';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.imageWr}>
                <img src={userAvatar} alt="User Avatar"/>
            </div>
            <div className={styles.itemRight}>
                <div className={styles.title}>
                    {props.name}
                </div>
                <div className={styles.text}>
                    {props.message}
                </div>
                <div>Like [{props.likeCount ? props.likeCount : 0}]</div>
            </div>
        </div>
    )
}

export default Post;