import React from "react"
import styles from './Footer.module.scss'
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>Copyright</div>
            <NavLink to='/' className={styles.logo}>LOGO</NavLink>
        </footer>
    )
}

export default Footer