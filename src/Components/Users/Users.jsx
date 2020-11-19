import React from 'react';
import styles from './users.module.scss';
import * as axios from "axios";
import userPhoto from '../../assets/img/icons/User avatar.svg'

export default class Users extends React.Component {
	constructor(props) {
		super(props);
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					this.props.setUsers(response.data.items);
				});
		}
	}

	render() {
		return <div className={styles.usersList}>
			{
				this.props.users.map(user => <div key={user.id} className={styles.item}>
					<div className={styles.itemLeft}>
						<div className={styles.imageWrapper}>
							<img src={
								user.photos.small !== null
									? user.photos.small
									: userPhoto} alt={user.name}/>
						</div>
						{user.followed
							? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
							: <button onClick={() => this.props.follow(user.id)}>Follow</button>}
					</div>
					<div className={styles.itemRight}>
						<div className={styles.userInfo}>
							<span className={styles.fullName}>{user.name}</span>
							{user.status !== null
								? <span className={styles.status}>{user.status}</span>
								: ''}

						</div>
						<div className={styles.location}>
							<span className={styles.locationCountry}>Страна: {"user.location.country"}</span>
							<span className={styles.locationCity}>Город: {"user.location.city"}</span>
						</div>
					</div>
				</div>)
			}
		</div>
	}
}