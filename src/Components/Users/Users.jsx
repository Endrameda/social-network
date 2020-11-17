import React from 'react';
import styles from './users.module.scss';

const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoURL: 'https://giantbomb1.cbsistatic.com/uploads/scale_medium/0/1480/187705-arthas.jpg',
				followed: false,
				fullName: 'Sardor',
				status: 'I\'m a boss',
				location: {country: 'Uzbekistan', city: 'Fergana'}
			},
			{
				id: 2,
				photoURL: 'https://giantbomb1.cbsistatic.com/uploads/scale_medium/0/1480/187705-arthas.jpg',
				followed: true,
				fullName: 'Ekaterina',
				status: 'I\'m a boss to',
				location: {country: 'Uzbekistan', city: 'Fergana'}
			},
			{
				id: 3,
				photoURL: 'https://giantbomb1.cbsistatic.com/uploads/scale_medium/0/1480/187705-arthas.jpg',
				followed: false,
				fullName: 'Trall',
				status: 'I\'m leader of the Horde',
				location: {country: 'Kalimdor', city: 'Orgrimmar'}
			},
		])
	}

	return <div className={styles.usersList}>
		{
			props.users.map(user => <div key={user.id} className={styles.item}>
				<div className={styles.itemLeft}>
					<div className={styles.imageWrapper}>
						<img src={user.photoURL} alt={user.fullName}/>
					</div>
					{user.followed
						? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
						: <button onClick={() => props.follow(user.id)}>Follow</button>}
				</div>
				<div className={styles.itemRIght}>
					<div className={styles.userInfo}>
						<span className={styles.fullName}>{user.fullName}</span>
						<span className={styles.status}>{user.status}</span>
					</div>
					<div className={styles.location}>
						<span className={styles.locationCountry}>{user.location.country}</span>
						<span className={styles.locationCity}>{user.location.city}</span>
					</div>
				</div>
			</div>)
		}
	</div>
}

export default Users;