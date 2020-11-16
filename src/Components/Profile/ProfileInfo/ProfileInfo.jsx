import styles from './ProfileInfo.module.scss'
import React from "react";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://peakvisor.com/img/news/french-mountains.jpg" alt=""/>
            </div>
            <div className={styles.description}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo