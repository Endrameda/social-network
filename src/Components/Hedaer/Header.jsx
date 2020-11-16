import React from "react";
import styles from './Hedaer.module.scss';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to="/" className="logo">
                LOGO
            </NavLink>
        </header>
    )
}

export default Header