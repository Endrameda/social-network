import React from "react";
import styles from './Hedaer.module.scss';
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<header className={ styles.header }>
			<NavLink to="/" className="logo">
				LOGO
			</NavLink>
			
			<div className={ styles.login }>
				{ props.isAuth
					? <div>
						<span className={styles.name}>{ props.login }</span>
						<button onClick={ props.logout } className={styles.logout}>Logout</button>
					</div>
					: <NavLink to={ '/login' }>Login</NavLink> }
			</div>
		</header>
	)
}

export default Header