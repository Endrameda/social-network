import {NavLink} from "react-router-dom";
import styles from "./DialogItems.module.scss";
import React from "react";
import userAvatar from '../../../assets/img/icons/User avatar.svg'

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;

    const checkUserImage = (userImage) => {
        if (userImage !== null) {
            return userImage
        }

        return userAvatar
    }

    return (
        <NavLink to={path} activeClassName={styles.active} className={styles.dialog}>
            <div className={styles.userImage}>
                <img src={checkUserImage(props.instagramUserPicSrc)} alt=""/>
            </div>
            <div className={styles.userNickName}>
                {props.name}
            </div>
        </NavLink>
    )
}

export default DialogItem